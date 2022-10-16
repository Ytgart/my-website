<?php
    Router::route();
?>

<?php
class Router
{
    static function route()
    {
        $controller_name = $_REQUEST["controller"] ?: "page";
        $action_name = $_REQUEST["action"] ?: "index";

        $controller_file = "app/controllers/" . $controller_name . 'Controller.php';

        if (file_exists($controller_file)) {
            include $controller_file;
        } else {
            die("Ошибка. Файл контроллера $controller_name не найден.");
        }

        $controller_class_name = ucfirst($controller_name) . "Controller";
        $controller = new $controller_class_name;

        if (method_exists($controller, $action_name)) {
            $controller->$action_name();
        } else {
            die("Ошибка. Отсутствует метод $action_name контроллера $controller_class_name.");
        }
    }
}
?>