<?php

include "app/base/BaseView.php";

class ContactView extends BaseView
{
    public function render($title, $content)
    {
        parent::render($title, $content);
        include "app/views/Contact.php";
    }

    public function validate($title, $content, array $errors)
    {
        $this->render($title, $content);

        foreach ($errors as $error) {
            echo "<p style='color: red'>$error</p>";
        }
    }
}