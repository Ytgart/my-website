<?php
include "app/views/PhotoalbumView.php";
include "app/base/BaseController.php";
include "app/models/PhotoalbumModel.php";

class PhotoalbumController extends BaseController
{
    function __construct()
    {
        $this->model = new PhotoalbumModel();
        $this->view = new PhotoalbumView();
        $this->title = "Фотоальбом";
    }
}