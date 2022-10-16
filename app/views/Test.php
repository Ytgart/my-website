<div class="testform">
    <form action="http://localhost/my-website/test/validate" id="form1" method="POST">
        <input id="fio" name="name" placeholder="ФИО" size="40" value="<?= $_POST["name"] ?? "" ?>">
        <br>
        <br>
        <select name="group">
            <optgroup label="1 курс">
                <option>ИС/б-21-1-о</option>
            </optgroup>
            <optgroup label="2 курс">
                <option>ИС/б-20-1-о</option>
            </optgroup>
            <optgroup label="3 курс">
                <option>ИС/б-19-1-о</option>
            </optgroup>
            <optgroup label="4 курс">
                <option>ИС/б-18-1-о</option>
            </optgroup>
        </select>
        <br>
        <br>
        <p>Дайте определение биоценоза.</p>
        <select name="1question">
            <option <?php if (!strcmp($_POST["1question"] ?? "", "Сообщество видов.")) { echo "selected";} ?>>Сообщество видов.</option>
            <option <?php if (!strcmp($_POST["1question"] ?? "", "Сообщество растений и животных.")) { echo "selected";} ?>>Сообщество растений и животных.</option>
        </select>
        <br>
        <br>
        <p>Что такое биотические факторы?</p>
        <input id="question2" name="2question" type="text" value="<?= $_POST["2question"] ?? "" ?>">
        <br>
        <br>
        <p>Что подразумевают симбиотические отношения?</p>
        <input id="1" name="3question" type="radio"
               value="answer1" <?php if (!strcmp($_POST["3question"] ?? "", "answer1")) { echo "checked";} ?>>
        <label>Взаимную выгоду.</label>
        <input id="2" name="3question" type="radio"
               value="answer2" <?php if (!strcmp($_POST["3question"] ?? "", "answer2")) { echo "checked";} ?>>
        <label>Угнетение.</label>
        <br>
        <br>
        <input type="reset" value="Очистить поля">
        <br>
        <br>
        <input type="submit" value="Проверить">
    </form>
</div>