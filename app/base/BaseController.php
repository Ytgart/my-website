<?php

class BaseController
{
    public $model;
    public $view;
    public $title = "BaseTitle";

    public function index()
    {
        $this->view->render($this->title, $this->model);
    }
}