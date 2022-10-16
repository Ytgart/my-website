<div class="inputform">
    <form action="http://localhost/my-website/contact/validate" id="form1" method="POST">
        <input id="fio" name="fio" placeholder="ФИО" size="40" value="<?= $_POST["fio"] ?? "" ?>">
        <br>
        <br>
        <input id="email" name="e-mail" placeholder="E-Mail" size="40" value="<?= $_POST["e-mail"] ?? "" ?>">
        <br>
        <br>
        <input id="phone" name="phone" placeholder="Телефон" size="40" value="<?= $_POST["phone"] ?? "" ?>">
        <br>
        <br>
        <input id="date" name="date" placeholder="Дата" size="40" value="<?= $_POST["date"] ?? "" ?>">
        <br>
        <br>
        <div class="calendar">
            <div class="selectMY">
                <select id="months"></select>
                <select id="years"></select>
            </div>
            <div class="dayNames">
                <p>&#x41F;&#x43E;&#x43D;</p>
                <p>&#x412;&#x442;&#x440;</p>
                <p>&#x421;&#x440;&#x434;</p>
                <p>&#x427;&#x442;&#x432;</p>
                <p>&#x41F;&#x44F;&#x442;</p>
                <p>&#x421;&#x443;&#x431;</p>
                <p>&#x412;&#x43E;&#x441;</p>
            </div>
            <div class="days"></div>
        </div>
        <br>
        <br>
        <select name="age">
            <option>1-18</option>
            <option>18-35</option>
            <option>35-50</option>
            <option>50-70</option>
            <option>70-..</option>
        </select>
        <br>
        <br>
        <input type="reset" value="Очистить поля">
        <br>
        <br>
        <input id="sendButton" type="submit" value="Отправить">
    </form>
</div>