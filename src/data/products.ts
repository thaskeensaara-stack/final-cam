import { Product } from '../types';

import nikonZ9Img from '../assets/images/nikon_z9_flagship_1785501422943.jpg';
import canonR1Img from '../assets/images/canon_eos_r1_prod_1785501496168.jpg';
import sonyA1Img from '../assets/images/sony_alpha_1_prod_1785501507934.jpg';
import fujiX100Img from '../assets/images/fujifilm_x100vi_prod_1785501520616.jpg';
import leicaM11Img from '../assets/images/leica_m11_prod_1785501533621.jpg';
import sonyFx3Img from '../assets/images/sony_fx3_prod_1785501547328.jpg';
import canon5dImg from '../assets/images/canon_5d_prod_1785501563189.jpg';
import goproImg from '../assets/images/gopro_hero_prod_1785501574444.jpg';
import sony2470Img from '../assets/images/camera_zoom_lens_1785501587339.jpg';
import canon50mmImg from '../assets/images/camera_prime_lens_1785501600157.jpg';
import sigma1835Img from '../assets/images/sigma_1835_art_prod_1785502305038.jpg';
import nikkor85Img from '../assets/images/nikkor_85_prod_1785501750503.jpg';
import tamron2875Img from '../assets/images/tamron_2875_prod_1785501765675.jpg';
import backpackImg from '../assets/images/peak_backpack_prod_1785501613345.jpg';
import sandiskImg from '../assets/images/sandisk_cfexpress_prod_1785501710986.jpg';
import smallrigImg from '../assets/images/smallrig_cage_prod_1785501723235.jpg';
import strobeImg from '../assets/images/godox_strobe_prod_1785501626760.jpg';
import godoxVl300Img from '../assets/images/godox_vl300_prod_1785501738500.jpg';
import rodeMicImg from '../assets/images/rode_wireless_mic_1785501454366.jpg';
import shotgunMicImg from '../assets/images/shotgun_mic_prod_1785501641137.jpg';
import gimbalImg from '../assets/images/dji_gimbal_prod_1785501652830.jpg';
import tripodImg from '../assets/images/carbon_tripod_fluid_1785501467121.jpg';
import monitorImg from '../assets/images/camera_monitor_prod_1785501665104.jpg';
import droneImg from '../assets/images/dji_mavic_drone_1785501439846.jpg';
import backdropImg from '../assets/images/motorized_backdrop_sys_1785501691941.jpg';

export const PRODUCTS_DATA: Product[] = [
  // --- CAMERAS ---
  {
    id: 'nikon-z9',
    name: 'Nikon Z9 Mirrorless Body',
    brand: 'Nikon',
    category: 'Cameras',
    subCategory: 'Mirrorless',
    description: '45.7MP FX-Format Stacked CMOS sensor with 8K30p video, subject detection, and zero blackout EVF.',
    image: nikonZ9Img,
    keySpecs: ['45.7MP Full-Frame', '8K 30p & 4K 120p', 'Stacked CMOS', 'No Mechanical Shutter'],
    featured: true,
    priceTag: '₹4,75,000'
  },
  {
    id: 'canon-eos-r1',
    name: 'Canon EOS R1 Flagship Mirrorless',
    brand: 'Canon',
    category: 'Cameras',
    subCategory: 'Mirrorless',
    description: 'Built for sports and photojournalism with 24.2MP stacked sensor, Accelerated Capture Engine, and Eye Control AF.',
    image: canonR1Img,
    keySpecs: ['24.2MP Stacked Sensor', '40 fps Electronic Burst', '6K RAW Internal', 'Cross-Type AF'],
    featured: true,
    priceTag: '₹6,30,000'
  },
  {
    id: 'sony-alpha-1',
    name: 'Sony Alpha 1 Flagship Body',
    brand: 'Sony',
    category: 'Cameras',
    subCategory: 'Mirrorless',
    description: '50.1MP Exmor RS sensor delivering 30 fps continuous shooting with blackout-free viewing and 8K 30p recording.',
    image: sonyA1Img,
    keySpecs: ['50.1MP Exmor RS', '30 fps Shooting', '8K 30p / 4K 120p', '9.44m-Dot EVF'],
    featured: true,
    priceTag: '₹5,59,990'
  },
  {
    id: 'fujifilm-x100vi',
    name: 'Fujifilm X100VI Digital Camera',
    brand: 'Fujifilm',
    category: 'Cameras',
    subCategory: 'Compact',
    description: '40.2MP X-Trans CMOS 5 HR sensor, 23mm f/2 lens, 6-stop IBIS, and 20 iconic Film Simulation modes.',
    image: fujiX100Img,
    keySpecs: ['40.2MP X-Trans 5', 'Fixed 23mm f/2 Lens', '6-Stop In-Body IS', '20 Film Simulations'],
    featured: true,
    priceTag: '₹1,49,999'
  },
  {
    id: 'leica-m11',
    name: 'Leica M11 Rangefinder Camera',
    brand: 'Leica',
    category: 'Cameras',
    subCategory: 'Mirrorless',
    description: 'Triple Resolution 60MP Full-Frame BSI CMOS Sensor, Visoflex 2 EVF support, and heritage optical design.',
    image: leicaM11Img,
    keySpecs: ['60MP BSI Sensor', '64GB Internal Memory', 'Iconic M Mount', 'Handcrafted in Germany'],
    featured: true,
    priceTag: '₹8,10,000'
  },
  {
    id: 'sony-fx3',
    name: 'Sony Cinema Line FX3 Camera',
    brand: 'Sony',
    category: 'Cameras',
    subCategory: 'Cinema',
    description: 'Compact cinema body with top XLR handle, dual base ISO 800/12800, active cooling fan, and S-Cinetone.',
    image: sonyFx3Img,
    keySpecs: ['12.1MP Full-Frame BSI', '4K 120p 10-Bit 4:2:2', 'Top Handle XLR Unit', 'Active Cooling System'],
    featured: false,
    priceTag: '₹3,99,990'
  },
  {
    id: 'canon-5d-mark-iv',
    name: 'Canon EOS 5D Mark IV DSLR',
    brand: 'Canon',
    category: 'Cameras',
    subCategory: 'DSLR',
    description: 'Legendary full-frame DSLR workhorse with 30.4MP sensor, Dual Pixel CMOS AF, and rugged weather sealing.',
    image: canon5dImg,
    keySpecs: ['30.4MP Full-Frame', '61-Point High Density AF', '4K DCI Video', 'EF Mount Heritage'],
    featured: false,
    priceTag: '₹2,35,000'
  },
  {
    id: 'gopro-hero12',
    name: 'GoPro HERO12 Black Action Camera',
    brand: 'GoPro',
    category: 'Cameras',
    subCategory: 'Action',
    description: '5.3K60 video, HDR video & photo, HyperSmooth 6.0 stabilization, and Bluetooth audio connectivity.',
    image: goproImg,
    keySpecs: ['5.3K 60fps / 4K 120fps', 'HyperSmooth 6.0', '10-Bit Log Color', 'Waterproof to 33ft'],
    featured: false,
    priceTag: '₹39,990'
  },

  // --- LENSES ---
  {
    id: 'sony-24-70-gm2',
    name: 'Sony FE 24-70mm f/2.8 GM II Lens',
    brand: 'Sony G Master',
    category: 'Lenses',
    subCategory: 'Zoom',
    description: 'Lightest and sharpest standard zoom f/2.8 lens in its class with 4 XD Linear Motors and aperture ring.',
    image: sony2470Img,
    keySpecs: ['E-Mount / Full-Frame', 'f/2.8 Constant Aperture', 'Nano AR Coating II', 'XA Optical Elements'],
    featured: true,
    priceTag: '₹1,99,990'
  },
  {
    id: 'canon-rf-50-f12',
    name: 'Canon RF 50mm f/1.2L USM Prime',
    brand: 'Canon RF',
    category: 'Lenses',
    subCategory: 'Prime',
    description: 'Ultra-fast prime lens setting new standards in optical clarity, resolution, and dreamlike bokeh background blur.',
    image: canon50mmImg,
    keySpecs: ['RF-Mount / L-Series', 'f/1.2 Maximum Aperture', 'Ring USM AF System', 'Weather-Sealed'],
    featured: true,
    priceTag: '₹2,15,000'
  },
  {
    id: 'sigma-18-35-art',
    name: 'Sigma 18-35mm f/1.8 DC HSM Art',
    brand: 'Sigma',
    category: 'Lenses',
    subCategory: 'Zoom',
    description: 'World’s first zoom lens to achieve a fast f/1.8 constant aperture throughout its entire zoom range.',
    image: sigma1835Img,
    keySpecs: ['f/1.8 Constant Aperture', 'Art Series Glass', 'Hyper Sonic AF Motor', 'Special Low Dispersion Glass'],
    featured: true,
    priceTag: '₹62,500'
  },
  {
    id: 'nikon-z-85-f12',
    name: 'Nikon NIKKOR Z 85mm f/1.2 S Lens',
    brand: 'Nikon Z',
    category: 'Lenses',
    subCategory: 'Portrait',
    description: 'Ultra-fast professional portrait prime lens delivering magnificent bokeh rendering and corner-to-corner sharpness.',
    image: nikkor85Img,
    keySpecs: ['Z-Mount / S-Line', 'f/1.2 Maximum Aperture', 'Multi-Focus Stepping AF', 'Nano Crystal & ARNEO Coat'],
    featured: false,
    priceTag: '₹2,49,990'
  },
  {
    id: 'tamron-28-75-g2',
    name: 'Tamron 28-75mm f/2.8 Di III VXD G2',
    brand: 'Tamron',
    category: 'Lenses',
    subCategory: 'Zoom',
    description: 'High-speed compact zoom lens for Sony E & Nikon Z mounts featuring VXD linear motor focus drive.',
    image: tamron2875Img,
    keySpecs: ['f/2.8 Constant Aperture', 'VXD Linear AF Motor', '0.18m Close Focus', 'USB-C Custom Port'],
    featured: false,
    priceTag: '₹74,990'
  },

  // --- PHOTOGRAPHY ACCESSORIES ---
  {
    id: 'peak-design-everyday-backpack',
    name: 'Peak Design Everyday Backpack 30L V2',
    brand: 'Peak Design',
    category: 'Photography Accessories',
    subCategory: 'Camera Bags',
    description: 'Iconic award-winning expandable camera backpack with FlexFold dividers and MagLatch hardware.',
    image: backpackImg,
    keySpecs: ['30L Expandable Capacity', 'Weatherproof 400D Shell', 'FlexFold Modular Dividers', '16" Laptop Sleeve'],
    featured: true,
    priceTag: '₹28,500'
  },
  {
    id: 'sandisk-cfexpress-type-b',
    name: 'SanDisk Extreme PRO CFexpress Type B 512GB',
    brand: 'SanDisk',
    category: 'Photography Accessories',
    subCategory: 'Memory Cards',
    description: 'Ultra-fast read speeds up to 1700MB/s and write speeds up to 1400MB/s for smooth 8K RAW video recording.',
    image: sandiskImg,
    keySpecs: ['512GB Capacity', '1700MB/s Read Speed', '8K RAW Video Ready', 'Lifetime Limited Warranty'],
    featured: false,
    priceTag: '₹22,990'
  },
  {
    id: 'smallrig-cage-sony-a7iv',
    name: 'SmallRig Modular Cage Kit for Sony Alpha',
    brand: 'SmallRig',
    category: 'Photography Accessories',
    subCategory: 'Camera Cages',
    description: 'Full camera cage with NATO rail, Arca-Swiss quick release plate, cold shoe mount, and HDMI cable clamp.',
    image: smallrigImg,
    keySpecs: ['Form-Fitting Design', 'Built-in Arca-Swiss Base', 'Dual-Locking Anti-Twist', 'Multiple 1/4"-20 Threads'],
    featured: false,
    priceTag: '₹7,490'
  },

  // --- LIGHTING ---
  {
    id: 'godox-ad600pro',
    name: 'Godox AD600Pro Witstro Outdoor Strobe',
    brand: 'Godox',
    category: 'Lighting',
    subCategory: 'Studio Flash',
    description: '600Ws battery-powered outdoor flash with 0.01-0.9s recycle time, 380 full power flashes, and 38W LED modeling lamp.',
    image: strobeImg,
    keySpecs: ['600Ws Power Output', '2.4G Wireless X System', '1/8000s High-Speed Sync', 'Lithium Battery Powered'],
    featured: true,
    priceTag: '₹58,990'
  },
  {
    id: 'godox-vl300',
    name: 'Godox VL300 COB LED Video Light',
    brand: 'Godox',
    category: 'Lighting',
    subCategory: 'LED Lights',
    description: '300W daylight-balanced COB LED light with CRI 96/TLCI 97, separate power controller, and Bowens mount.',
    image: godoxVl300Img,
    keySpecs: ['300W COB LED', 'CRI 96 / TLCI 97', 'Bowens S-Mount', 'Silent Cooling Fan'],
    featured: false,
    priceTag: '₹42,000'
  },

  // --- AUDIO ---
  {
    id: 'rode-wireless-pro',
    name: 'RØDE Wireless PRO Dual Channel System',
    brand: 'Rode',
    category: 'Audio',
    subCategory: 'Wireless Microphones',
    description: 'Ultimate compact wireless microphone kit with 32-bit float onboard recording, GainAssist technology, and lavaliers included.',
    image: rodeMicImg,
    keySpecs: ['32-Bit Float Onboard Recording', '260m Range Transmission', '2 Transmitters + 1 Receiver', 'Locking 3.5mm Connectors'],
    featured: true,
    priceTag: '₹37,990'
  },
  {
    id: 'sennheiser-mke-600',
    name: 'Sennheiser MKE 600 Shotgun Microphone',
    brand: 'Sennheiser',
    category: 'Audio',
    subCategory: 'Shotgun Microphones',
    description: 'Broadcast-quality shotgun microphone with high directivity, low-cut filter, and dual phantom/AA battery power options.',
    image: shotgunMicImg,
    keySpecs: ['Supercardioid Pattern', 'Low-Cut Rumble Filter', 'XLR & 3.5mm Output', 'All-Metal Construction'],
    featured: false,
    priceTag: '₹28,990'
  },

  // --- VIDEO PRODUCTION ---
  {
    id: 'dji-rs4-pro',
    name: 'DJI RS 4 Pro Handheld Gimbal Stabilizer',
    brand: 'DJI',
    category: 'Video Production',
    subCategory: 'Gimbals',
    description: 'Flagship carbon fiber gimbal with 4.5kg payload capacity, 2nd-gen automated axis locks, and LiDAR focusing capability.',
    image: gimbalImg,
    keySpecs: ['4.5kg Tested Payload', 'Carbon Fiber Arms', 'LiDAR Focus System', 'Automated Axis Locks'],
    featured: true,
    priceTag: '₹72,990'
  },
  {
    id: 'manfrotto-055-tripod',
    name: 'Manfrotto 055 Carbon Fiber 3-Section Tripod',
    brand: 'Manfrotto',
    category: 'Video Production',
    subCategory: 'Tripods',
    description: 'Professional Italian-engineered carbon fiber tripod legs with 90° center column mechanism and Easy Link attachment.',
    image: tripodImg,
    keySpecs: ['Carbon Fiber Construction', '90° Center Column', '9kg Load Capacity', 'Made in Italy'],
    featured: false,
    priceTag: '₹34,500'
  },
  {
    id: 'atomos-ninja-ultra',
    name: 'Atomos Ninja Ultra 5.2" 4K Monitor-Recorder',
    brand: 'Video Production',
    category: 'Video Production',
    subCategory: 'External Monitors',
    description: 'HDR monitor recorder with 1000-nit screen, ProRes RAW recording up to 8K 30p, and H.265 proxy workflow support.',
    image: monitorImg,
    keySpecs: ['1000-Nit HDR Display', 'ProRes RAW & H.265 Recording', 'HDMI 2.0 Input/Output', 'AtomOS 11 Operating System'],
    featured: false,
    priceTag: '₹69,990'
  },

  // --- DRONES ---
  {
    id: 'dji-mavic-3-pro',
    name: 'DJI Mavic 3 Pro Drone (Fly More Combo)',
    brand: 'DJI',
    category: 'Drones',
    subCategory: 'Professional Drones',
    description: 'Triple camera flagship drone featuring Hasselblad 4/3 CMOS camera, dual tele lenses, 43-min flight time, and APAS 5.0.',
    image: droneImg,
    keySpecs: ['Hasselblad 4/3 CMOS Sensor', '5.1K 50fps Video', '43 Minutes Flight Time', 'Omnidirectional Obstacle Sensing'],
    featured: true,
    priceTag: '₹2,39,990'
  },

  // --- STUDIO EQUIPMENT ---
  {
    id: 'studio-backdrop-system',
    name: 'Professional Motorized Studio Backdrop System',
    brand: 'Studio Equipment',
    category: 'Studio Equipment',
    subCategory: 'Backdrop Stands',
    description: 'Heavy duty ceiling or wall mounted 4-roller motorized backdrop support system with remote control for seamless rolls.',
    image: backdropImg,
    keySpecs: ['4-Roll Motorized Drive', 'Wireless Remote Included', 'Heavy-Duty Steel Brackets', 'Compatible with Paper & Fabric'],
    featured: false,
    priceTag: '₹24,990'
  }
];

