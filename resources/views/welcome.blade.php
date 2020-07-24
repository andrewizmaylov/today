<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="/css/main.css">
        <!-- Styles -->

    </head>
    <body class="bg-gray-100"> 
        <div id="app">
            <mainapp></mainapp>
        </div>
        <script src="{{ asset('js/app.js') }}"></script>

    </body>
</html>
