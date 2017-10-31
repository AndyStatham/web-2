<?php
namespace app\index\controller;
use think\Config;
use think\Env;
use think\Request;
use think\Session;
use think\Db;
use think\Controller;

use app\index\model\TNotification;
//use think\Loader;


class Index extends Controller
{
    public function index()
    {
        $this->assign("title","index");
        return $this->fetch();

    }

    public function company()
    {
        $this->assign("title","company");
        return $this->fetch();

    }

    public function product()
    {
        $this->assign("title","product");
        return $this->fetch();

    }

    public function property()
    {
        $this->assign("title","property");
        return $this->fetch();

    }

    public function propertyGroup()
    {
        $this->assign("title","propertyGroup");
        return $this->fetch();

    }

    public function category()
    {
        $this->assign("title","category");
        return $this->fetch();

    }

    public function notification()
    {
        $this->assign("title","notification");

        $res = TNotification::get(function ($query){
        });

        $res = $res->toArray();

        dump($res);

        return $this->fetch(dump($res));

    }

    public function info($id)
    {
        echo url('index/index/info',['id'=>$id])."<br>";

        return "{$id}";
    }
}

