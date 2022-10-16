<?php

enum ValidateType
{
    case IsNotEmpty;
    case IsInteger;
    case IsLess;
    case IsGreater;
    case IsEmail;
    case IsBioFactor;
    case AnswerIs;
}

class FormValidator
{
    protected array $rules = array();
    protected array $errors = array();

    function isNotEmpty($data): bool
    {
        return !empty($data);
    }

    function isInteger($data): bool
    {
        return is_integer($data);
    }

    function isLess($data, $value): bool
    {
        return $data < $value;
    }

    function isGreater($data, $value): bool
    {
        return $data > $value;
    }

    function isEmail($data): bool
    {
        return filter_var($data, FILTER_VALIDATE_EMAIL);
    }

    function setRule(string $field_name, ValidateType $condition, $value): void
    {
        $params = array($condition, $value);
        $this->rules[$field_name] = $params;
    }

    function validate(array $post_array): void
    {
        foreach ($post_array as $key => $value) {
            if (key_exists($key, $this->rules)) {
                switch ($this->rules[$key][0]) {
                    case ValidateType::IsNotEmpty:
                        if (!$this->isNotEmpty($value)) {
                            $this->errors[$key] = "Поле $key не должно быть пустым";
                        }
                        break;
                    case ValidateType::IsInteger:
                        if (!$this->isInteger($value)) {
                            $this->errors[$key] = "Поле $key должно быть числом";
                        }
                        break;
                    case ValidateType::IsEmail:
                        if (!$this->isEmail($value)) {
                            $this->errors[$key] = "Поле $key должно быть электронной почтой";
                        }
                        break;
                    case ValidateType::IsLess:
                        if (!$this->isLess($value, $this->rules[$key][1])) {
                            $this->errors[$key] = "Поле $key должно быть меньше {$this->rules[$key][1]}";
                        }
                        break;
                    case ValidateType::IsGreater:
                        if (!$this->isGreater($value, $this->rules[$key][1])) {
                            $this->errors[$key] = "Поле $key должно быть больше {$this->rules[$key][1]}";
                        }
                        break;
                }
            }
        }
    }

    function getErrors(): array
    {
        return $this->errors;
    }
}