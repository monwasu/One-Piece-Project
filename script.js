// Default, Player ,Player Size TODO
let board;
let boardWidth = 800; //TODO ขนาดบอร์ดตามต้องการ
let boardHeight = 300;
let context;
let playerWidth = 100;
let playerHeight = 100;
let playerX = 50;
let playerY = 215;
let playerImg;
let player = {
    x: playerX,
    y: playerY,
    width: playerWidth,
    height: playerHeight
};
//TODO แก้รูปภาพตรง src
playerImg = new Image();
playerImg.src = "https://imgs.search.brave.com/NgJhsOlBFlMW66eAflPTa81iw7eGniqed5Hkp0CDK0E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mL2I5/ZDY3YWIyLTU2ZmMt/NDIyMi1iZDE2LWNj/NzZmNWJkN2Y2Yi9k/ZmNlb3lrLTBlNzkz/MmIxLWFiMGEtNDgw/Ni05Nzg4LTZmOGNj/YTQxZTg5Mi5wbmcv/djEvZmlsbC93XzI2/NCxoXzM1MC9nZWFy/XzVfbHVmZnlfcmVu/ZGVyX2J5X2FrYXRz/dWtpYW5uaWVfZGZj/ZW95ay0zNTB0LnBu/Zz90b2tlbj1leUow/ZVhBaU9pSktWMVFp/TENKaGJHY2lPaUpJ/VXpJMU5pSjkuZXlK/emRXSWlPaUoxY200/NllYQndPamRsTUdR/eE9EZzVPREl5TmpR/ek56TmhOV1l3WkRR/eE5XVmhNR1F5Tm1V/d0lpd2lhWE56SWpv/aWRYSnVPbUZ3Y0Rv/M1pUQmtNVGc0T1Rn/eU1qWTBNemN6WVRW/bU1HUTBNVFZsWVRC/a01qWmxNQ0lzSW05/aWFpSTZXMXQ3SW1o/bGFXZG9kQ0k2SWp3/OU1UWTVPU0lzSW5C/aGRHZ2lPaUpjTDJa/Y0wySTVaRFkzWVdJ/eUxUVTJabU10TkRJ/eU1pMWlaREUyTFdO/ak56Wm1OV0prTjJZ/Mllsd3ZaR1pqWlc5/NWF5MHdaVGM1TXpK/aU1TMWhZakJoTFRR/NE1EWXRPVGM0T0Mw/MlpqaGpZMkUwTVdV/NE9USXVjRzVuSWl3/aWQybGtkR2dpT2lJ/OFBURXlPREFpZlYx/ZExDSmhkV1FpT2xz/aWRYSnVPbk5sY25a/cFkyVTZhVzFoWjJV/dWIzQmxjbUYwYVc5/dWN5SmRmUS51YjJl/WEh0WDhudVlzMVNz/RkJQSzJFektKeUtn/OWV4NWxsTWdzWm1t/VmI0";

let gameOver = false;
let score = 0;
let time = 0;
let live = 3;

// Object TODO ขนาดของกล่อง

//TODO แก้รูปภาพสิ่งกรีดขวาง
// Load box images
box1Img = new Image();
box1Img.src = "https://imgs.search.brave.com/R9jKg1jK1JBfeOcEn2AuTyS2j09LsXkMnRImW8t3nIo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mLzUx/MTU4MzE2LWZkN2Ut/NDhjYS1iNWZlLTg1/NDJlOWRmZTM1Ny9k/ZmNyMGNxLWZkNTI3/MzdjLTNhOGItNDY4/NC1iZDRkLTZlYzA2/NTE3MmUwZi5wbmcv/djEvZml0L3dfMzc1/LGhfMzM3L3Nha2F6/dWtpX2FrYV9hZG1p/cmFsX2FrYWludV9i/eV9ib2Rza2loX2Rm/Y3IwY3EtMzc1dy5w/bmc_dG9rZW49ZXlK/MGVYQWlPaUpLVjFR/aUxDSmhiR2NpT2lK/SVV6STFOaUo5LmV5/SnpkV0lpT2lKMWNt/NDZZWEJ3T2pkbE1H/UXhPRGc1T0RJeU5q/UXpOek5oTldZd1pE/UXhOV1ZoTUdReU5t/VXdJaXdpYVhOeklq/b2lkWEp1T21Gd2NE/bzNaVEJrTVRnNE9U/Z3lNalkwTXpjellU/Vm1NR1EwTVRWbFlU/QmtNalpsTUNJc0lt/OWlhaUk2VzF0N0lt/aGxhV2RvZENJNklq/dzlNVGcwTWlJc0lu/QmhkR2dpT2lKY0wy/WmNMelV4TVRVNE16/RTJMV1prTjJVdE5E/aGpZUzFpTldabExU/ZzFOREpsT1dSbVpU/TTFOMXd2WkdaamNq/QmpjUzFtWkRVeU56/TTNZeTB6WVRoaUxU/UTJPRFF0WW1RMFpD/MDJaV013TmpVeE56/SmxNR1l1Y0c1bklp/d2lkMmxrZEdnaU9p/SThQVEl3TkRnaWZW/MWRMQ0poZFdRaU9s/c2lkWEp1T25ObGNu/WnBZMlU2YVcxaFoy/VXViM0JsY21GMGFX/OXVjeUpkZlEuSkxK/ck5GVHNhbklKZ2VP/WUktdFB4SlBCMUw2/WHdQWjM2WVdvbGJO/YkxfNA"; // box1 image

box2Img = new Image();
box2Img.src = "https://imgs.search.brave.com/Q3TRbeN-BvAMt4shriJAhvSp0_VPv3AXDB4VPvxbFd0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mL2M3/YmNlZDQ5LTczYTMt/NDNjMS1iM2NlLWZl/NDE5YTU5NmE3Mi9k/aGE0eWs3LTk5MWNh/Yjk1LTM4MDktNDU0/ZS1hY2M3LWIwMmJk/Y2EzZWI1MS5wbmc_/dG9rZW49ZXlKMGVY/QWlPaUpLVjFRaUxD/SmhiR2NpT2lKSVV6/STFOaUo5LmV5Snpk/V0lpT2lKMWNtNDZZ/WEJ3T2pkbE1HUXhP/RGc1T0RJeU5qUXpO/ek5oTldZd1pEUXhO/V1ZoTUdReU5tVXdJ/aXdpYVhOeklqb2lk/WEp1T21Gd2NEbzNa/VEJrTVRnNE9UZ3lN/alkwTXpjellUVm1N/R1EwTVRWbFlUQmtN/alpsTUNJc0ltOWlh/aUk2VzF0N0luQmhk/R2dpT2lKY0wyWmNM/Mk0zWW1ObFpEUTVM/VGN6WVRNdE5ETmpN/UzFpTTJObExXWmxO/REU1WVRVNU5tRTNN/bHd2WkdoaE5IbHJO/eTA1T1RGallXSTVO/UzB6T0RBNUxUUTFO/R1V0WVdOak55MWlN/REppWkdOaE0yVmlO/VEV1Y0c1bkluMWRY/U3dpWVhWa0lqcGJJ/blZ5YmpwelpYSjJh/V05sT21acGJHVXVa/RzkzYm14dllXUWlY/WDAuRDRGZm8xenpO/YUdRMG5fWDI3MjFE/LVFDU0g4LXNjc1ZF/QzFnV29ydnNvOA"; // Replace with another box image link

box3Img = new Image();
box3Img.src = "https://imgs.search.brave.com/72kxxNWOGKZNlgjZREfZ3oyQ6exoWdofDGUZgDvzqPw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mLzUx/MTU4MzE2LWZkN2Ut/NDhjYS1iNWZlLTg1/NDJlOWRmZTM1Ny9k/ZmN0ZXdlLTY4MDMy/NDc0LWFlZWItNDFm/ZC04ZWMyLTdiNmU4/NDhjZTVmMC5wbmcv/djEvZml0L3dfMzc1/LGhfMjgwL2NoYXJs/b3R0ZV9saW5saW5f/YWthX2JpZ19tb21f/YnlfYm9kc2tpaF9k/ZmN0ZXdlLTM3NXcu/cG5nP3Rva2VuPWV5/SjBlWEFpT2lKS1Yx/UWlMQ0poYkdjaU9p/SklVekkxTmlKOS5l/eUp6ZFdJaU9pSjFj/bTQ2WVhCd09qZGxN/R1F4T0RnNU9ESXlO/alF6TnpOaE5XWXda/RFF4TldWaE1HUXlO/bVV3SWl3aWFYTnpJ/am9pZFhKdU9tRndj/RG8zWlRCa01UZzRP/VGd5TWpZME16Y3pZ/VFZtTUdRME1UVmxZ/VEJrTWpabE1DSXNJ/bTlpYWlJNlcxdDdJ/bWhsYVdkb2RDSTZJ/anc5T1RjMElpd2lj/R0YwYUNJNklsd3Za/bHd2TlRFeE5UZ3pN/VFl0Wm1RM1pTMDBP/R05oTFdJMVptVXRP/RFUwTW1VNVpHWmxN/elUzWEM5a1ptTjBa/WGRsTFRZNE1ETXlO/RGMwTFdGbFpXSXRO/REZtWkMwNFpXTXlM/VGRpTm1VNE5EaGpa/VFZtTUM1d2JtY2lM/Q0ozYVdSMGFDSTZJ/anc5TVRNd05pSjlY/VjBzSW1GMVpDSTZX/eUoxY200NmMyVnlk/bWxqWlRwcGJXRm5a/UzV2Y0dWeVlYUnBi/MjV6SWwxOS54dE15/WWNwbmY0S1gxOHJN/TVQ3alhNNlM1a2xy/Rk0xRTdtMlF3QVZT/dGZ3";

// Setting Object
let boxesArray = [];
let boxSpeed = -8; //TODO ความเร็วของกล่อง(สิ่งกรีดขวาง)

// Gravity, Velocity
let VelocityY = 0;
let Gravity = 0.25;

let Retry = document.getElementById("RetryButton");
let RetryDelay = false

console.log(player);
window.onload = function () {
    // Display
    board = document.getElementById("Board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");

    // Player
    playerImg.onload = function () {
        context.drawImage(playerImg, player.x, player.y, player.width, player.height);
    };

    // Request animation frame
    requestAnimationFrame(update);

    document.addEventListener("keydown", movePlayer);
    Retry.addEventListener("click", ()=>{
        if(RetryDelay){
        
        }else{
            RetryDelay = true
            setTimeout(() => {
                gameReset()
                RetryDelay=false
                }, 1000);
            }
        }   );

    
    createBoxWithRandomInterval();
};

// Function to create a box at a random time interval
function createBoxWithRandomInterval() {

    if (gameOver) {
        return;
    }

    createBox(); // Create a box

    // Generate a random time between 1 and 3 seconds (1000 to 3000 milliseconds)
    let randomTime = rnd(1000, 2500); //TODO Set เวลา 1000 คือ 1 วิ

    // Use setTimeout instead of setInterval to create boxes at random times
    setTimeout(createBoxWithRandomInterval, randomTime);
}

function rnd(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

// Update Function
function update() {
    requestAnimationFrame(update); // Always update animation

    if (gameOver) {
        return;
    }

    context.clearRect(0, 0, board.width, board.height);
    VelocityY += Gravity;

    player.y = Math.min(player.y + VelocityY, playerY);
    context.drawImage(playerImg, player.x, player.y, player.width, player.height);

    for (let index = 0; index < boxesArray.length; index++) {
        let box = boxesArray[index];
        box.x += boxSpeed;
        context.drawImage(box.img, box.x, box.y, box.width, box.height);

        if (onCollision(player, box)) {
            gameOver = true;
            live -= 1;

            context.font = "normal bold 40px Arial"; //TODO Set font กรณีอยากเปลี่ยน Font
            context.textAlign = "center";
            context.fillText("GameOver!", boardWidth / 2, boardHeight / 2);
            context.fillText("Your Score : "+score,boardWidth/2 ,(boardHeight/2)+50);


            setTimeout(() => {
                Retry.style.display = "block";
            }, 500);
        }
    }
    score++;
    time += 0.01;
    context.font = "normal bold 40px Arial";
    context.textAlign = "left";
    context.fillText("Score : " + score, 200, 40); //TODO แก้ว่า Score อยู่ตรงไหน
    context.fillText("Time : " + time.toFixed(0), 20, 40);
    context.fillText("Live Remain : " + live, 20, 80);
    if (time == 60) {
        gameOver = true;
        context.font = "normal bold 40px Arial"; //TODO แก้font + ลบComment
        context.textAlign = "center";
        context.fillText("You Won! With Score :" + score, boardWidth / 2, boardHeight / 2);
        
    }
}

function movePlayer(e) {
    if (gameOver) {
        return;
    }

    if (e.code === "Space" && player.y === playerY) {
        VelocityY = -10;
    }
}

function createBox(e) {
    if (gameOver) {
        return;
    }
    let randomType = rnd(1, 3); // Randomly choose between 1 and 2
    let boxImg, boxWidth, boxHeight, boxSpeed,boxX = 1000,boxY;

    if (randomType === 1) {
        boxImg = box1Img;
        boxWidth = 70;
        boxHeight = 100;
        boxSpeed = -3; // Default speed
        boxY = 200;
    } else if (randomType === 2) {
        boxImg = box2Img;
        boxWidth = 100; // Different size for box2
        boxHeight = 100;
        boxSpeed = -4; // Faster speed for box2
        boxY = 215;
    } else {
        boxImg = box3Img;
        boxWidth = 100; // Different size for box2
        boxHeight = 100;
        boxSpeed = -3; // Faster speed for box2
        boxY = 200;
    }

    let box = {
        img: boxImg,
        x: boxX,
        y: boxY,
        width: boxWidth,
        height: boxHeight,
        speed: boxSpeed
    };

    boxesArray.push(box);

    if (boxesArray.length > 5) {
        boxesArray.shift();
    }
}

function onCollision(obj1, obj2) {
    return obj1.x < (obj2.x + obj2.width) && (obj1.x + obj1.width) > obj2.x // Crash in X move
        && obj1.y < (obj2.y + obj2.height) && (obj1.y + obj1.height) > obj2.y; // Crash in Y move
}

function gameReset() {
    if (!gameOver) {
        return;
    }

    
    if (live > 0) {
        setTimeout(() => {
            gameOver = false;
            Retry.style.display = "block"; // Hide the Retry button
            score = 0;
            time = 0;
            boxesArray = [];
            VelocityY = 0; // Reset gravity effect
            player.y = playerY; // Reset player position

            createBoxWithRandomInterval(); // Restart creating boxes
        }, 500);
        
    }
}

function refreshPage() {
    location.reload(); // This reloads the current page
}
