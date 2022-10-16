<?php

include "app/validators/CustomFormValidator.php";

class ResultsVerification extends CustomFormValidator
{


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
                    case ValidateType::IsBioFactor:
                        if (!$this->isBioFactor($value)) {
                            $this->errors[$key] = "Поле $key должно начинаться с 'bio-'";
                        }
                        break;
                    case ValidateType::AnswerIs:
                        if ($value == $this->rules[$key][1]) {
                            $this->errors[$key] = "Ответ правильный!";
                        } else {
                            $this->errors[$key] = "Ответ не правильный!";
                        }
                        break;
                }
            }
        }
    }
}