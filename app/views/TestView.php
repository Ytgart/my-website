<?php

include "app/base/BaseView.php";

class TestView extends BaseView
{
    public function render($title, $content)
    {
        parent::render($title, $content);
        include "Test.php";
    }

    public function validate($title, $content, array $errors)
    {
        $this->render($title, $content);

        foreach ($errors as $error) {

            if ($error == "Ответ правильный!") {
                echo "<p style='color: green'>$error</p>";
            } else {
                echo "<p style='color: red'>$error</p>";
            }
        }
    }
}