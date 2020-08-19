<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{env('APP_NAME')}}</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
   <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Delius+Unicase:wght@700&family=Gloria+Hallelujah&family=Neucha&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="/css/main.css">
        <!-- Styles -->

    </head>
    <body class="antialiased text-gray-900 font-sans bg-gray-100"> 
        <div id="app" class="" >
            <mainapp v-if="!isLoading"></mainapp>
            
            <loading v-else></loading>
        </div>

        <script src="{{ asset('js/app.js') }}"></script>

    </body>
</html>
