<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Item extends Model
{
    use HasFactory;


    public static function fetchItems(
        $order_by = '',
        $item_name = "",
        $paginate = false,
        $result_per_page = 6
    ) {

        switch ($order_by) {
            case 'A-Z':
                $sort_how = "ASC";
                $order_by =  "name";
                break;
            case 'Z-A':
                $sort_how = "DESC";
                $order_by =  "name";
                break;
            case 'Date ascending':
                $sort_how = "ASC";
                $order_by =  "created_at";
                break;

            case 'Date descending':
                $sort_how = "DESC";
                $order_by =  "created_at";
                break;
            default:
                $sort_how = "DESC";
                $order_by =  "id";
        }

        $out_come_array = array('error' => false, 'item_data' => [
            'data' => ['error' => ""],
            'total' => 0,
        ]);

        try {

            $query = DB::table('items')
                ->select(
                    'items.id',
                    'items.name',
                    'items.img_url',
                    'A.name AS storage_name',
                )->join('storages AS A', 'A.id', '=', 'storage_id');
            if ($item_name  != '') {
                $query->where([
                    ['items.name', 'LIKE', "%{$item_name}%"]
                ]);
            }
            $query->orderBy($order_by, $sort_how);
            if ($paginate) {
                $res =  $query->paginate($result_per_page);
                // check if there is a result data
                if ($res->total() > 0) {
                    $out_come_array['item_data'] = $res;
                    $item_name_res['item_data']['error'] = "";
                }
            } else {
                $res =  $query->limit($result_per_page)->get();
                if (count($res) > 0) {
                    $out_come_array['item_data'] = $res;
                    $item_name_res['item_data']['error'] = "";
                }
            }
            // dd($out_come_array);
            return $out_come_array;
        } catch (\Exception $e) {
            dd($e);
            $out_come_array['error'] = true;
            return $out_come_array;
        }
    } //End fetchItems


}//End class
