<?php

include "app/views/TestView.php";
include "app/models/TestModel.php";
include "app/base/BaseController.php";

class TestController extends BaseController
{
    public function __construct()
    {
        $this->title = "Тест";
        $this->view = new TestView();
        $this->model = new TestModel();

        $this->model->setValidationRule("1question", ValidateType::AnswerIs, "Сообщество видов.");
        $this->model->setValidationRule("2question", ValidateType::IsBioFactor, 0);
        $this->model->setValidationRule("2question", ValidateType::AnswerIs, "bio-factor");
        $this->model->setValidationRule("3question", ValidateType::AnswerIs, "answer2");
        $this->model->setValidationRule("name", ValidateType::IsNotEmpty, 0);
    }

    public function validate()
    {
        $this->view->validate($this->title, $this->model, $this->model->validateDataAndGetErrors());
    }
}