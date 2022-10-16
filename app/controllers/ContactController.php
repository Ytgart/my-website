<?php

include "app/views/ContactView.php";
include "app/base/BaseController.php";
include "app/models/ContactModel.php";

class ContactController extends BaseController
{
    public function __construct()
    {
        $this->view = new ContactView();
        $this->model = new ContactModel();
        $this->title = "Контакт";

        $this->model->setValidationRule("fio", ValidateType::IsNotEmpty, "0");
        $this->model->setValidationRule("e-mail", ValidateType::IsNotEmpty, "0");
        $this->model->setValidationRule("date", ValidateType::IsNotEmpty, "0");
        $this->model->setValidationRule("e-mail", ValidateType::IsEmail, "0");
        $this->model->setValidationRule("phone", ValidateType::IsLess, "500");
    }

    public function validate()
    {
        $this->view->validate($this->title, $this->model, $this->model->validateDataAndGetErrors());
    }
}