<?php

include "app/validators/ResultsVerification.php";

class TestModel
{
    private CustomFormValidator $validator;

    public function __construct()
    {
        $this->validator = new ResultsVerification();
    }

    public function validateDataAndGetErrors(): array
    {
        $this->validator->validate($_POST);
        return $this->validator->getErrors();
    }

    public function setValidationRule(string $field_name, ValidateType $condition, $value): void
    {
        $this->validator->setRule($field_name, $condition, $value);
    }
}