<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/assets/css/lib/select2.css">
    <link rel="stylesheet" href="/assets/css/lib/splide.css">
    <link rel="stylesheet" href="/assets/css/lib/flatpicker.css">
    <link rel="stylesheet" href="/assets/css/style.css">
    <script  src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="/assets/js/lib/alpine.js"></script>
    <script src="/assets/js/lib/select2.js"></script>
    <script src="/assets/js/lib/splide.js"></script>
    <script src="/assets/js/lib/flatpicker.js"></script>
    <script src="/assets/js/main.js"></script>
</head>
<body class="overflow-x-hidden" x-data="{ open: false, atTop: false }" :class="{ 'max-[1024px]:h-svh fixed overflow-hidden': open }">

<header class="py-8 top-0 left-0 z-50 w-screen fixed right-0 transition duration-500 ease-in-out" :class="{ 'bg-black bg-opacity-40 shadow-lg ': atTop, 'bg-transparent': !atTop, }" @scroll.window="atTop = (window.pageYOffset < 50) ? false: true">
    <div class="container">
        <div class="flex justify-between items-center">
            <a href="">
                <img src="/assets/img/svg/logo.svg" alt="">
            </a>
            <nav class="max-[991px]:fixed max-[991px]:inset-0 max-[991px]:bg-black max-[991px]:z-[999] max-[991px]:p-10  max-[991px]:w-full max-[991px]:h-svh" :class="{'max-[991px]:translate-x-0 ': open, 'max-[991px]:-translate-x-full': !open}" x-transition>
                <ul class="flex space-x-[35px] max-[991px]:flex-col max-[991px]:space-y-[35px] max-[991px]:space-x-0">
                    <li><a class="link-nav" href="">Home</a></li>
                    <li><a class="link-nav" href="/vehicles.php">Vehicles</a></li>
                    <li><a class="link-nav" href="">Services</a></li>
                    <li><a class="link-nav" href="">Promotions</a></li>
                    <li><a class="link-nav" href="">News</a></li>
                    <li><a class="link-nav" href="">My Budget</a></li>
                    <div class="nav-right flex flex-col gap-y-[32px] min-[992px]:hidden">
                        <select
                            name="price-switch"
                            id="price-v"
                            class="price appearance-none cursor-pointer text-sm text-white bg-transparent outline-none"
                            >
                            <option class="bg-transparent text-gray-700" value="euro">EURO | €</option>
                            <option class="bg-transparent text-gray-700" value="dollar">DOLLAR | $</option>
                            <option class="bg-transparent text-gray-700" value="mad">MAD | DH</option>
                        </select>
    
                        <div class="currency-switcher">
                            <div class="dropdown">
                                <div class="caption">
                                    

                                    <span>EN</span>
                                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_45_1098)">
                                        <rect width="17" height="14" rx="1" fill="#1A47B8"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.80845 0H0V2.33333L15.1817 14L17 14V11.6667L1.80845 0Z" fill="white"/>
                                        <path d="M0.603175 0L17 12.6331V14H16.411L0 1.35385V0H0.603175Z" fill="#F93939"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.381 0H17.0001V2.33333C17.0001 2.33333 6.48419 10.1062 1.61911 14H6.10352e-05V11.6667L15.381 0Z" fill="white"/>
                                        <path d="M17 0H16.4509L0 12.644V14H0.603175L17 1.36408V0Z" fill="#F93939"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.1824 0H10.8317V4.31836H17V9.67879H10.8317V14H6.1824V9.67879H0V4.31836H6.1824V0Z" fill="white"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.15789 0H9.8421V5.38462H17V8.61539H9.8421V14H7.15789V8.61539H0V5.38462H7.15789V0Z" fill="#F93939"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_45_1098">
                                        <rect width="17" height="14" rx="1" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div class="list">
                                <div class="item selected" data-item="EN">
                                    

                                    <span>EN</span>
                                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_45_1098)">
                                        <rect width="17" height="14" rx="1" fill="#1A47B8"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.80845 0H0V2.33333L15.1817 14L17 14V11.6667L1.80845 0Z" fill="white"/>
                                        <path d="M0.603175 0L17 12.6331V14H16.411L0 1.35385V0H0.603175Z" fill="#F93939"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.381 0H17.0001V2.33333C17.0001 2.33333 6.48419 10.1062 1.61911 14H6.10352e-05V11.6667L15.381 0Z" fill="white"/>
                                        <path d="M17 0H16.4509L0 12.644V14H0.603175L17 1.36408V0Z" fill="#F93939"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.1824 0H10.8317V4.31836H17V9.67879H10.8317V14H6.1824V9.67879H0V4.31836H6.1824V0Z" fill="white"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.15789 0H9.8421V5.38462H17V8.61539H9.8421V14H7.15789V8.61539H0V5.38462H7.15789V0Z" fill="#F93939"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_45_1098">
                                        <rect width="17" height="14" rx="1" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div class="item" data-item="FR">
                                    
                                    <span>FR</span>
                                    <svg  width="17" height="14" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 356.18"><path fill="#E1000F" d="M345.04 0h139C499.44.1 512 12.72 512 28.13v299.91c0 15.47-12.65 28.13-28.13 28.14H345.04V0zM15.11 352.95zm-9.54-8.15z"/><path fill="#fff" d="M27.96 0h317.08v356.18H27.98C12.57 356.09 0 343.46 0 328.04V28.14C0 12.72 12.56.1 27.96 0z"/><path fill="#273375" d="M27.96 0h138.99v356.18H28c-15.42-.08-28-12.71-28-28.14V28.14C0 12.72 12.56.1 27.96 0z"/></svg>
                                </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
                <div class="min-[992px]:hidden fixed top-[32px] max-[992px]:right-[40px] max-[640px]:right-[25px]" @click="open = false">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                
            </nav>
            
            <div class="nav-right flex gap-y-[32px] max-[991px]:hidden mb-[-5px]">
                <select
                    name="price-switch"
                    id="price"
                    class="price appearance-none cursor-pointer text-sm text-white bg-transparent outline-none"
                    >
                    <option class="bg-transparent text-gray-700" value="euro">EURO | €</option>
                    <option class="bg-transparent text-gray-700" value="dollar">DOLLAR | $</option>
                    <option class="bg-transparent text-gray-700" value="mad">MAD | DH</option>
                </select>

                
                <div class="currency-switcher">
                    <div class="dropdown">
                        <div class="caption">
                            

                            <span>EN</span>
                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_45_1098)">
                                <rect width="17" height="14" rx="1" fill="#1A47B8"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.80845 0H0V2.33333L15.1817 14L17 14V11.6667L1.80845 0Z" fill="white"/>
                                <path d="M0.603175 0L17 12.6331V14H16.411L0 1.35385V0H0.603175Z" fill="#F93939"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.381 0H17.0001V2.33333C17.0001 2.33333 6.48419 10.1062 1.61911 14H6.10352e-05V11.6667L15.381 0Z" fill="white"/>
                                <path d="M17 0H16.4509L0 12.644V14H0.603175L17 1.36408V0Z" fill="#F93939"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.1824 0H10.8317V4.31836H17V9.67879H10.8317V14H6.1824V9.67879H0V4.31836H6.1824V0Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.15789 0H9.8421V5.38462H17V8.61539H9.8421V14H7.15789V8.61539H0V5.38462H7.15789V0Z" fill="#F93939"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_45_1098">
                                <rect width="17" height="14" rx="1" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div class="list">
                        <div class="item selected" data-item="EN">
                            

                            <span>EN</span>
                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_45_1098)">
                                <rect width="17" height="14" rx="1" fill="#1A47B8"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.80845 0H0V2.33333L15.1817 14L17 14V11.6667L1.80845 0Z" fill="white"/>
                                <path d="M0.603175 0L17 12.6331V14H16.411L0 1.35385V0H0.603175Z" fill="#F93939"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.381 0H17.0001V2.33333C17.0001 2.33333 6.48419 10.1062 1.61911 14H6.10352e-05V11.6667L15.381 0Z" fill="white"/>
                                <path d="M17 0H16.4509L0 12.644V14H0.603175L17 1.36408V0Z" fill="#F93939"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.1824 0H10.8317V4.31836H17V9.67879H10.8317V14H6.1824V9.67879H0V4.31836H6.1824V0Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.15789 0H9.8421V5.38462H17V8.61539H9.8421V14H7.15789V8.61539H0V5.38462H7.15789V0Z" fill="#F93939"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_45_1098">
                                <rect width="17" height="14" rx="1" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div class="item" data-item="FR">
                            
                            <span>FR</span>
                            <svg  width="17" height="14" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 356.18"><path fill="#E1000F" d="M345.04 0h139C499.44.1 512 12.72 512 28.13v299.91c0 15.47-12.65 28.13-28.13 28.14H345.04V0zM15.11 352.95zm-9.54-8.15z"/><path fill="#fff" d="M27.96 0h317.08v356.18H27.98C12.57 356.09 0 343.46 0 328.04V28.14C0 12.72 12.56.1 27.96 0z"/><path fill="#273375" d="M27.96 0h138.99v356.18H28c-15.42-.08-28-12.71-28-28.14V28.14C0 12.72 12.56.1 27.96 0z"/></svg>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            <div class="min-[992px]:hidden" @click="open = true">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
            </div>
            
              
        </div>
        

    </div>
</header>