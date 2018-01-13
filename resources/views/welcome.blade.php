<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .link, .desc {
                color: #636b6f;
                padding: 0 25px;
                text-decoration: none;
                text-transform: uppercase;
            }

            .link{
                font-size: 12px;
                font-weight: 550;
                letter-spacing: .1rem;
            }

            .desc{
                font-size: 14px;
                font-weight: 600;
                letter-spacing: .2rem;
                margin-bottom: 20px;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">

            <div class="content">
                <div class="title m-b-md">
                    Thebat
                </div>

                <div class="desc">
                  a forum dedicated to debate
                </div>
                <div class="link">
                  <a href="/login">Click here to continue</a>
                </div>
            </div>
        </div>
    </body>
</html>
