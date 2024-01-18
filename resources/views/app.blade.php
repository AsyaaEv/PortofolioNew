<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap');
    
            * {
                font-family: 'Sora', sans-serif;
            }
    
            *::-webkit-scrollbar {
                width: 0.5rem;
                /* Lebar scroll bar */
            }
    
            *::-webkit-scrollbar-thumb {
                background-color: #d3d3d3;
                border-radius: 50px;
                /* Warna thumb (grip) scroll bar */
            }
    
            #animasiGambar {
                animation: animasiGambar 2s linear infinite;
            }
    
            @keyframes animasiGambar {
                0% {
                    transform: translateY(0px)
                }
    
                50% {
                    transform: translateY(10px)
                }
    
                100% {
                    transform: translateY(0px)
                }
            }
        </style>
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
