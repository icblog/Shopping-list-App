<?php

use Illuminate\Support\Facades\Route;
//USER IMPORT
use App\Http\Controllers\HomeController;
use App\Http\Controllers\VisitorController;
use App\Http\Controllers\TempInOutController;


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

// ========== IVISITOR ROUTE ===========//
Route::get('/sign-in-option', [VisitorController::class, 'signInOptionIndex'])->name('iv.siginOption');
Route::get('/co-worker-signin', [VisitorController::class, 'coWorkerSignInIndex'])->name('iv.coWorkerSiginIn');
Route::get('/external-visitor-signin', [VisitorController::class, 'extVisitorSignInIndex'])->name('iv.extVisitorSignin');
Route::get('/signout', [VisitorController::class, 'signOutIndex'])->name('iv.signout');

Route::post('/search-coworker', [VisitorController::class, 'searchCoworker']);
Route::post('/handle-visitor-signin', [VisitorController::class, 'store']);
Route::post('/find-visitor-signedin', [VisitorController::class, 'findVisitorSignin']);
Route::post('/handle-signout', [VisitorController::class, 'handleVisitorSignout']);

// ========== TEMPINOUT ROUTE ===========//
Route::get('/temp-in-out', [TempInOutController::class, 'index'])->name('temp.inout');
Route::get('/temp-offsite-backin/{signed_out_id}', [TempInOutController::class, 'tempBackInIndex'])->name('temp.backinindex');
Route::post('/handle-temp-out', [TempInOutController::class, 'handleTempOut']);
Route::post('/handle-temp-offsite-sign-in', [TempInOutController::class, 'handleOffsiteSignIn']);
Route::post('/find-temp-offsite-signed-out', [TempInOutController::class, 'findOffsiteSignOut']);
