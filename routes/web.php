<?php

use Illuminate\Support\Facades\Route;
//USER IMPORT
use App\Http\Controllers\HomeController;
use App\Http\Controllers\StorageController;
use App\Http\Controllers\ListNameController;
use App\Http\Controllers\AddItemController;
use App\Http\Controllers\ViewItemController;
use App\Http\Controllers\SListController;
use App\Http\Controllers\EmailTestController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// ==========HOME ROUTE===========//
Route::match(['get', 'post'], '/', [HomeController::class, 'index'])->name("home.index");
Route::match(['get', 'post'], '/home', [HomeController::class, 'index'])->name("home.index");
Route::post('/add-list-name', [ListNameController::class, 'addListName'])->name("addlistname");
Route::post('/update-list-name', [ListNameController::class, 'updateListName'])->name("updatelistname");
Route::post('/delete-list-name', [ListNameController::class, 'deleteListName'])->name("deletelistname");
// ==========ADD ITEM ROUTE===========//
Route::get('/add-items', [AddItemController::class, 'index']);
Route::post('/save-items', [AddItemController::class, 'save']);
// ==========VIEW ITEM ROUTE===========//
Route::match(['get', 'post'], '/view-items', [ViewItemController::class, 'index'])->name("viewitems.index");
Route::post('/update-item', [ViewItemController::class, 'update'])->name("viewitems.update");
Route::post('/delete-item', [ViewItemController::class, 'delete'])->name("viewitems.delete");


// ==========SHOPPING LIST ROUTE===========//
Route::match(['get', 'post'], '/s-list/{name}/{id}', [SListController::class, 'index'])->name("slist.index");
Route::post('/search-item', [SListController::class, 'searchItem'])->name("searchitem");
Route::post('/add-item-list', [SListController::class, 'addListItem'])->name("addlistitem");
Route::post('/s-list-delete-item', [SListController::class, 'deleteListItem'])->name("deletelistitem");
Route::post('/s-list-update-item', [SListController::class, 'updateListItem'])->name("updatelistitem");
Route::post('/s-list-reset', [SListController::class, 'resetListItems'])->name("resetlistitem");
Route::post('/update-item-qty', [SListController::class, 'updateItemQty'])->name("updateitemqty");
// ==========STORAGE ROUTE===========//
Route::match(['get', 'post'], '/storage', [StorageController::class, 'index'])->name("home.index");
Route::post('/add-storage', [StorageController::class, 'addStorage'])->name("addStorage");
Route::post('/update-storage', [StorageController::class, 'updateStorage'])->name("updateStorage");
Route::post('/delete-storage', [StorageController::class, 'deleteStorage'])->name("deletelistname");

//Email test route
Route::get('/test-email', [EmailTestController::class, 'index']);
