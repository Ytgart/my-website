<?php

include "app/validators/FormValidator.php";

class ContactModel
{
    private FormValidator $validator;

    public function __construct()
    {
        $this->validator = new FormValidator();
    }

    public function validateDataAndGetErrors(): array
    {
        $this->validator->validate($_POST);
        return $this->validator->getErrors();
    }

    public function setValidationRule(string $field_name, ValidateType $condition, int $value): void
    {
        $this->validator->setRule($field_name, $condition, $value);
    }
}