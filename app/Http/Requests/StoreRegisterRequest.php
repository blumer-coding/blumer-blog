<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'name'   => 'required|regex:/(^[a-zA-Z0-9_-]{6,12}$)/',
            'pwd'    => 'required|regex:/(^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z_]{6,20}$)/',
            'pwdcfm' => 'required|regex:/(^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z_]{6,20}$)/|same:pwd',
            'email'  => 'required|email|unique:users'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => '用户名不能为空',
            'pwd.required' => '密码不能为空',
            'pwdcfm.required' => '密码不能为空',
            'email.required' => '邮箱不能为空',
            'name.regex' => '无效的用户名',
            'pwd.regex' => '无效的密码',
            'pwdcfm.regex' => '无效的密码',
            'pwdcfm.same' => '两次输入的密码不一致',
            'email.email' => '无效的邮箱',
            'email.unique' => '此邮箱已经注册'
        ];
    }
}
