<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    //
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    protected $fillable = [
        'user_id','slug','title','content'
    ];
}
