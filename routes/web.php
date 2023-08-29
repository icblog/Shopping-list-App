<?php
use Illuminate\Support\Facades\Route;
//USER IMPORT
use App\Http\Controllers\HomeController;
use App\Http\Controllers\VisitorController;



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
Route::get('/',[HomeController::class, 'index'])->name("home.index");
Route::get('/home',[HomeController::class, 'index'])->name("home.index");

// ========== IVISITOR ROUTE ===========//
Route::get('/sign-in-option',[VisitorController::class,'signInOptionIndex'])->name('iv.siginOption');
Route::get('/co-worker-signin',[VisitorController::class, 'coWorkerSignInIndex'])->name('iv.coWorkerSiginIn');
Route::get('/external-visitor-signin',[VisitorController::class,'extVisitorSignInIndex'])->name('iv.extVisitorSignin');
Route::get('/signout',[VisitorController::class,'signOutIndex'])->name('iv.signout');

Route::post('/search-coworker',[VisitorController::class, 'searchCoworker']);
Route::post('/handle-visitor-signin',[VisitorController::class,'store']);
Route::post('/find-visitor-signedin',[VisitorController::class,'findVisitorSignin']);
Route::post('/handle-signout',[VisitorController::class,'handleVisitorSignout']);