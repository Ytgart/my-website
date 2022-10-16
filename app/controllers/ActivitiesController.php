<?php
include "app/views/ActivitiesView.php";
include "app/base/BaseController.php";
include "app/models/ActivitiesModel.php";

class ActivitiesController extends BaseController
{
    function __construct()
    {
        $this->model = new ActivitiesModel();
        $this->view = new ActivitiesView();
        $this->title = "Мои интересы";
    }
}
