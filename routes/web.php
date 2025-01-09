<?php

use Illuminate\Support\Facades\Route;
//USER IMPORT
use App\Http\Controllers\HomeController;
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
Route::get('/', [HomeController::class, 'index'])->name("home.index");
Route::get('/home', [HomeController::class, 'index'])->name("home.index");

//Email test route
Route::get('/test-email', [EmailTestController::class, 'index']);
