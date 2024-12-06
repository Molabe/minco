<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Ručne vyrábané fotomagnetky z vašich najlepších momentov. Vyberte si z rôznych formátov a vytvorte originálny darček alebo dekoráciu pre vašu domácnosť.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index, follow">
    <meta name="keywords" content="fotomagnetky, ručne vyrábané magnetky, darčeky, magnetky na chladničku">
    <meta property="og:title" content="Spognetky.sk - Ručne vyrábané fotomagnetky">
    <meta property="og:description" content="Vytvorte ručne vyrábané fotomagnetky z vašich obľúbených momentov.">
    <meta property="og:image" content="https://www.spognetky.sk/img/velka.jpg">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.spognetky.sk">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Spognetky.sk - Ručne vyrábané fotomagnetky">
    <meta name="twitter:description" content="Vytvorte ručne vyrábané fotomagnetky z vašich obľúbených momentov.">
    <meta name="twitter:image" content="https://www.spognetky.sk/img/velka.jpg">
    <link rel="icon" href="/public/images/logo.png" type="image/x-icon">
    <link rel="canonical" href="https://www.spognetky.sk">
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" as="style">

    <title>Spognetky.sk - Ručne vyrábané fotomagnetky</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="../assets/css/main.css">

    <style>

        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');

        body {
            margin: 0;
            padding: 0;
        }

        .quicksand-500 {
            font-family: "Quicksand", sans-serif;
            font-optical-sizing: auto;
            font-weight: 500;
            font-style: normal;
        }

        .quicksand-700 {
            font-family: "Quicksand", sans-serif;
            font-optical-sizing: auto;
            font-weight: 700;
            font-style: normal;
        }
    </style>

</head>
<body style="background: linear-gradient(90deg, rgba(1,2,2,1) 0%, rgba(39,89,75,1) 100%);">

<!-- Main Section -->
<div class="container-fluid" style="background-color: #23C29A;">
    <div class="container d-flex justify-content-center p-2">
        <h4 class="quicksand-700">Doprava zdarma pri objednávke nad 50€!</h4>
    </div>
</div>

<?php
// Include common elements
include 'templates/navbar.php';
?>

<!-- Main Section -->

<div class="container-fluid text-center">
    <div class="row g-0">
        <div class="col p-0 m-0 text-center" style="background: #e6fff8; height: 80vh; width: 100%">
            <div class="container pt-4">

                <h4 class="quicksand-700">Vezmeme vaše obľúbené fotografie a premeníme ich na kvalitné, štýlové magnetky, ktoré oživia každú domácnosť alebo poslúžia ako skvelý darček</h4>

                <div class="row p-4 d-flex">
                    <div class="col" style="position: relative; left: 4vh; top: 1vh; rotate: -7deg">
                        <div class="container" style="border: 2px solid #000000; border-radius: 10px; background: #6FD8BB; width: 45vh; height: auto;">
                            <h4 class="p-2"><strong>Ako to funguje?</strong></h4>
                            <p class="quicksand-500" style="font-size: large">
                                <strong>1. Nahrajte svoju fotku:</strong> vyberte obľúbený záber z vášho telefónu, počítača alebo sociálnych sietí
                                <br>
                                <strong>2. Vyberte formát a design:</strong> Zvoľte si veľkosť, tvar a prípadné úpravy
                                <br>
                                <strong>3. Objednajte a relaxujte:</strong> Magnetky vyrobíme, zabalíme a doručíme priamo až k vám domov
                            </p>
                        </div>
                    </div>
                    <div class="col" style="rotate: 7deg; position: relative; left: 4vh; top: 1vh;">
                        <img src="../public/images/image0.jpeg" class="img-fluid" alt="" style="border: 2px solid rgb(0, 0, 0); border-radius: 10px; width: 30vh">
                    </div>
                </div>

                <div class="row p-4 d-flex align-items-center position-relative">
                    <!-- First Column -->
                    <div class="col" style="rotate: -15deg; position: relative; left: 6vh;">
                        <div class="container" style="border: 2px solid #000000; border-radius: 10px; background: #6FD8BB; width: 25vh; height: auto;">
                            <h6 class="p-2"><strong>Objednajte už dnes!</strong></h6>
                            <p class="quicksand-500">
                                Nahrajte svoju fotku a začnite tvoriť svoje <strong class="quicksand-700">Spognetky</strong>
                            </p>
                        </div>
                    </div>

                    <!-- Second Column -->
                    <div class="col">
                        <img src="../public/images/image1.png" alt="" width="70%" height="auto">
                    </div>

                    <!-- Fourth Column -->
                    <a class="col cus-btn" href=".././views/uploadWeb.php">
                        <div  class="btn quicksand-500" style="border: 2px solid #000000; border-radius: 10px; background: #4BBF9F; width: 75%; position: relative; left: -7vh; top: -1vh; text-decoration: none; color: inherit;">
                            <h5 style="color: black"><strong>TU si vytvoríš svoje Spognetky</strong></h5>
                        </div>
                    </a>

                    <!-- Overlapping Image -->
                    <div class="position-absolute" style="top: -30vh; left: 55%; transform: translateX(-50%); z-index: 1; rotate: -30deg">
                        <img src="../public/images/image0.png" alt="" style="width: 20vh; height: auto;">
                    </div>
                </div>
            </div>
        </div>
        <div class="col p-0 m-0">
            <div class="position-relative" style="width: 100%; height: 80vh;">
                <!-- Background Image -->
                <img class="img-fluid" src="../public/images/image1.jpeg" alt=""
                     style="width: 100%; height: 80vh; object-fit: cover; object-position: center;">

                <!-- Overlay Content -->
                <div class="position-absolute"
                     style="top: 25%; left: 50%; transform: translateX(-50%); rotate: 2deg; background-color: #8DC7B5; padding: 40px; border-radius: 10px; max-width: 80%; height: auto; border: 2px solid black;">
                    <h4 class="quicksand-700"><strong>Prečo si vybrať SPOGNETKY?</strong></h4>
                    <p class="quicksand-500">
                        <strong>Precíza kvalita:</strong> Moderné technológie lisovania zaručujú dlhú životnosť a sýte farby <br><br>
                        <strong>Osobný prístup:</strong> Každá magnetka je šitá na mieru vašim spomienkam <br><br>
                        <strong>Rýchle dodanie:</strong> Vaše objednávky spracujeme a doručíme v čo najkratšom čase <br><br>
                        <strong>Originálny darček:</strong> Ideálny spôsob, ako potešiť svojich blízkych
                    </p>
                </div>
            </div>


            <!-- Overlapping Image -->
            <div class="position-absolute" style="top: 20vh; left: 60%; rotate: -10deg;">
                <img src="../public/images/image3.png" alt="" style="width: 20vh; height: auto;">
            </div>
        </div>
    </div>
</div>

<!-- Include Footer -->
<?php include 'templates/footer.php'; ?>

<script src="../assets/js/spognetky.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
