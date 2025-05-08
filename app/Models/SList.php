<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class SList extends Model
{
    use HasFactory;


    public static function fetchList(
        $list_name_id = 1,
        $item_name = '',
        $paginate = false,
        $result_per_page = 6
    ) {
        // Initialize the outcome array
        $out_come_array = array('error' => false, 'list_data' => [
            'data' => ['error' => ""],
            'total' => 0,
        ]);



        try {


            // Build the query
            $query = DB::table('s_lists')
                ->select(
                    's_lists.id',
                    's_lists.qty',
                    's_lists.pending_trolley',
                    'A.name',
                    'A.img_url',
                    'B.name as storage_name'
                )
                ->join('items AS A', 'A.id', '=', 's_lists.item_id')
                ->Join('storages AS B', 'B.id', '=', 'A.storage_id');


            // If item_name is provided, filter results
            $item_name = trim($item_name);
            if ($item_name != '') {
                //dd($item_name);
                $query->where('A.name', 'LIKE', "%{$item_name}%");
            }
            $query->where("list_name_id", $list_name_id);
            // Apply the order by and direction
            $query->orderBy('A.name', 'ASC');

            // Fetch the results (pagination or limit)
            if ($paginate) {
                $res = $query->paginate($result_per_page);
                if ($res->total() > 0) {
                    // Group results by storage_name
                    $grouped = $res->getCollection()->groupBy(function ($item) {
                        return $item->storage_name ?? 'Unassigned';
                    });


                    // Set the collection with grouped data
                    $res->setCollection($grouped);
                    $out_come_array['list_data'] = $res;
                    $item_name_res['list_data']['error'] = "";
                }
            } else {
                $res = $query->limit($result_per_page)->get();
                if (count($res) > 0) {
                    // Group results by storage_name
                    $grouped = $res->groupBy(function ($item) {
                        return $item->storage_name ?? 'Unassigned';
                    });



                    // Set the result into the outcome array
                    $out_come_array['list_data'] = $grouped;
                    $item_name_res['list_data']['error'] = "";
                }
            }
        } catch (\Exception $e) {
            //dd($e);
            // Handle exceptions
            $out_come_array['error'] = true;
            $out_come_array['list_data']['data'] = ['error' => 'Error fetching data: ' . $e->getMessage()];
        }

        // Return the final outcome array
        return $out_come_array;
    }
}//End class
