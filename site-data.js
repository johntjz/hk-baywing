// site-data.js — Single Source of Truth for Metrics, Fleet, 28 HK/GBA Routes & 14 Stakeholder Logs (All in HKD, Zero Emails)
window.SITE_DATA = {
    // 1. KEY UPDATABLE FINANCIAL & TECHNICAL METRICS (HKD)
    metrics: {
        docId: 'AM-EF150-FS-2026 (REV 7.5)',
        dieselCostPerNM_HKD: 175.50,
        electricCostPerNM_HKD: 38.22,
        opexReductionPct: '78%',
        dragReductionPct: '80%',
        phase0TotalBudget_HKD: 'HK$ 3,198,000',
        phase0GrantsTotal_HKD: 'HK$ 2,990,000',
        phase0NetGap_HKD: 'HK$ 208,000',
        nonDilutiveRatio: '93.5%',
        d2TotalBudget_HKD: 'HK$ 20,000,000',
        d2EssMatch_HKD: 'HK$ 10,000,000',
        hkeWalkoverDate_en: '28 Oct: Sheung Wan GIS (22.290175, 114.148746) Filed w/ LandsD & EEB • HKE 22kV (+7.0mPD) Water-Airport Hub',
        hkeWalkoverDate_tc: '10月28日：上環座標 (22.290175, 114.148746) 遞交地政總署及環境局 • 港燈 22kV (+7.0mPD) 水上機場樞紐'
    },

    // 2. GLOBAL NAVIGATION & SHARED LABELS
    i18n: {
        en: {
            hdr_sub: 'HK & GBA Electric Hydrofoil & 22kV Water-Airport Hub',
            hdr_hke_btn: '📁 21/10 HKE Sheet',
            ftr_archive_link: 'Archived HKE Walkover Sheet (21/10) ↗',
            'nav_index.html': '01. Master Plan',
            'nav_routes-calculator.html': '02. 28 Routes & OPEX',
            'nav_engineering-rd.html': '03. R&D Blueprints',
            'nav_digital-twin.html': '04. Digital Twin (22)',
            'nav_capital-stakeholders.html': '05. 22kV Hub & Capital',
            ftr_copy: 'AERO-MARINE SYSTEMS LIMITED © 2026 // HONG KONG & GREATER BAY AREA (ALL FIGURES IN HKD)'
        },
        tc: {
            hdr_sub: '香港及大灣區純電水翼船及 22kV 水上機場樞紐',
            hdr_hke_btn: '📁 21/10 港燈勘察單',
            ftr_archive_link: '港燈現場勘察決策單存檔 (21/10) ↗',
            'nav_index.html': '01. 十年藍圖',
            'nav_routes-calculator.html': '02. 28條航線及成本',
            'nav_engineering-rd.html': '03. 工程藍圖',
            'nav_digital-twin.html': '04. 數字孿生庫 (22)',
            'nav_capital-stakeholders.html': '05. 22kV 碼頭及創投',
            ftr_copy: 'AERO-MARINE SYSTEMS LIMITED © 2026 // 香港及粵港澳大灣區（所有金額均以港幣 HKD 計算）'
        }
    },

    // 3. MODULAR 5-VESSEL LINEUP (D2 -> EF-150)
    fleet: [
        {
            code: 'BAYWING-D2',
            borderCls: 'border-l-tech-cyan',
            accentCls: 'text-tech-cyan',
            specsEn: '15.0m LOA | 32 Knots',
            specsTc: '總長 15.0米 | 32 節',
            battery: '400 kWh',
            en: {
                role: 'Phase 1 Launch Shuttle & Water Taxi',
                desc: 'Launch vessel for our Sheung Wan 22 kV Terminal (22.290175, 114.148746): serves Aberdeen–Lamma, Discovery Bay–Peng Chau, Tsuen Wan–Ma Wan, Sai Wan Ho–Sam Ka Tsuen, and Victoria Harbour Water Taxi.',
                payload: '40 Pax / 4t',
                charge: '500kW–1MW (6m)'
            },
            tc: {
                role: '第一階段先導穿梭艇及水上的士',
                desc: '上環 22 kV 純電碼頭 (22.290175, 114.148746) 首發船型：服務香港仔至南丫島、愉景灣至坪洲、荃灣至馬灣、西灣河至三家村及維港水上的士之 15 米高頻先導船。',
                payload: '40 座 / 4噸',
                charge: '500kW–1MW (6分鐘)'
            }
        },
        {
            code: 'BAYWING-D3',
            borderCls: 'border-l-sky-400',
            accentCls: 'text-sky-400',
            specsEn: '20.0m LOA | 28 Knots',
            specsTc: '總長 20.0米 | 28 節',
            battery: '600 kWh',
            en: {
                role: 'Cross-Harbour Domestic Feeder Shuttle',
                desc: 'Double-ended wide-gangway shuttle across all 8 Victoria Harbour crossings: charges 100% on the Hong Kong Island (22 kV) side and performs 60-second unpowered touch-and-go turnarounds at heritage-restricted piers like TST—funneling Kowloon passengers directly into our Sheung Wan CIQ Water-Airport.',
                payload: '120 Pax / 15t',
                charge: '800kW–1.5MW (4m)'
            },
            tc: {
                role: '維港高頻跨海接駁渡輪（港島單端快充）',
                desc: '雙頭對開闊跳板設計，專為維港 8 條跨海航線而設：100% 於港島 22 kV 樞紐快充，於受古蹟限制之尖沙咀等九龍碼頭實行 60 秒免充電即停即走，將九龍客流無縫接駁至上環跨境水上機場。',
                payload: '120 座 / 15噸',
                charge: '800kW–1.5MW (4分鐘)'
            }
        },
        {
            code: 'BAYWING-D4',
            borderCls: 'border-l-tech-emerald',
            accentCls: 'text-tech-emerald',
            specsEn: '24.0m LOA | 35 Knots',
            specsTc: '總長 24.0米 | 35 節',
            battery: '900 kWh',
            en: {
                role: 'Outlying Island Fast Hydrofoil',
                desc: 'High-speed commuter foil for Central/Sheung Wan to Discovery Bay, Lamma (Yung Shue Wan & Sok Kwu Wan), Peng Chau, Ma Wan, and Tuen Mun–Tung Chung–Tai O.',
                payload: '220 Pax / 25t',
                charge: '1.5MW–2.5MW (8m)'
            },
            tc: {
                role: '離島高速通勤水翼船',
                desc: '服務中上環至愉景灣、南丫島（榕樹灣及索罟灣）、坪洲、馬灣及屯門至東涌大澳之主力高速水翼船。',
                payload: '220 座 / 25噸',
                charge: '1.5MW–2.5MW (8分鐘)'
            }
        },
        {
            code: 'BAYWING-D5',
            borderCls: 'border-l-tech-amber',
            accentCls: 'text-tech-amber',
            specsEn: '28.0m LOA | 34 Knots',
            specsTc: '總長 28.0米 | 34 節',
            battery: '1.4 MWh',
            en: {
                role: 'Trunk Island Liner & Ro-Ro Freighter',
                desc: 'High-capacity trunk liner for Central–Cheung Chau and Central–Mui Wo, plus dedicated Ro-Ro Cargo Freighter configuration for 90-second modular island pallet swaps.',
                payload: '400 Pax / 50t',
                charge: '2.5MW–3.5MW (9m)'
            },
            tc: {
                role: '大型離島幹線客輪及滾裝貨船',
                desc: '中環至長洲、中環至梅窩高載量幹線客輪，另設專用滾裝貨船 (Ro-Ro Freighter) 支援 90 秒模組化離島卡板貨物裝卸。',
                payload: '400 座 / 50噸',
                charge: '2.5MW–3.5MW (9分鐘)'
            }
        },
        {
            code: 'BAYWING EF-150',
            borderCls: 'border-l-purple-400',
            accentCls: 'text-purple-400',
            specsEn: '28.5m LOA | 38 Knots',
            specsTc: '總長 28.5米 | 38 節',
            battery: '1.8 MWh (1,000V LFP)',
            en: {
                role: 'GBA Cross-Border Water-Airport Flagship',
                desc: '38-knot active hydrofoil flagship operating from our Sheung Wan 22 kV CIQ Water-Airport (and HKIA SkyPier airside transfer hub) to Macau (400V-to-BESS buffer), Shenzhen Shekou, SZX Airport, Zhuhai, and Nansha—capturing uncapped commercial yields (HK$ 220–480/seat) with overnight haul-out maintenance at Tsing Yi.',
                payload: '150 VIP Pax',
                charge: '3.5MW MCS (12m)'
            },
            tc: {
                role: '大灣區跨境「水上機場」高速旗艦',
                desc: '38 節主動水翼旗艦，由上環 22 kV 跨境水上機場及香港機場海天碼頭禁區出發，直達澳門（400V 儲能緩衝）、深圳蛇口、深圳機場、珠海及南沙——鎖定無票價上限之高毛利中程跨境市場（每座 HK$ 220–480），並於青衣工業船塢進行夜間吊裝檢修。',
                payload: '150 尊尚座',
                charge: '3.5MW MCS (12分鐘)'
            }
        }
    ],

    // 4. ALL 28 HK & GBA CORRIDORS (ALL SAVINGS IN HKD MILLIONS / YEAR)
    routes: [
        {
            id: 'vh-1', code: 'VH-01', cat: 'harbour', dist: 0.8, vessel: 'BAYWING-D3', speed: 24, kwh: 22, saveHKD: 2.96, co2: 980, defaultTrips: 14,
            pathD: 'M 585 265 C 588 245, 596 235, 602 222',
            en: { catLabel: 'VICTORIA HARBOUR CORRIDOR', name: 'Central / Sheung Wan ⟷ Tsim Sha Tsui', cap: '120 Pax', evTime: '3 mins', dieselTime: '7 mins', chargeMin: '3m', charger: '100% HKE 22kV Charged (Touch & Go at TST)', notes: 'Per 28 Oct CLP call: existing TST Pier cannot be retrofitted due to heritage rules. Shuttles charge 100% on the Hong Kong Island (22 kV) side and act as a 3-minute domestic feeder bringing Kowloon passengers into our Sheung Wan CIQ Water-Airport.' },
            tc: { catLabel: '維多利亞港走廊', name: '中上環 ⟷ 尖沙咀', cap: '120 座', evTime: '3 分鐘', dieselTime: '7 分鐘', chargeMin: '3分', charger: '100% 港島 22kV 快充 (尖沙咀即停即走)', notes: '根據 10月28日 中電會議確認：現有尖沙咀碼頭受古蹟限制無法改建；渡輪 100% 於港島 22 kV 樞紐充電，於尖沙咀實行 60 秒即停即走，將九龍旅客快速接駁至上環跨境水上機場。' }
        },
        {
            id: 'vh-2', code: 'VH-02', cat: 'harbour', dist: 1.0, vessel: 'BAYWING-D3', speed: 25, kwh: 26, saveHKD: 3.43, co2: 1120, defaultTrips: 14,
            pathD: 'M 640 262 C 625 245, 615 235, 602 222',
            en: { catLabel: 'VICTORIA HARBOUR CORRIDOR', name: 'Wan Chai ⟷ Tsim Sha Tsui', cap: '120 Pax', evTime: '3.5 mins', dieselTime: '8 mins', chargeMin: '3m', charger: 'HKE 22kV Hub (Touch & Go at TST)', notes: 'High-frequency convention and commuter link between Wan Chai Pier and TST with rapid 3-minute opportunity top-ups on the HK Island side.' },
            tc: { catLabel: '維多利亞港走廊', name: '灣仔 ⟷ 尖沙咀', cap: '120 座', evTime: '3.5 分鐘', dieselTime: '8 分鐘', chargeMin: '3分', charger: '港島 22kV 快充 (尖沙咀即停即走)', notes: '連接灣仔會展及尖沙咀的高頻通勤航線，於港島端完成快充補電。' }
        },
        {
            id: 'vh-3', code: 'VH-03', cat: 'harbour', dist: 1.8, vessel: 'BAYWING-D3', speed: 28, kwh: 45, saveHKD: 4.06, co2: 1340, defaultTrips: 12,
            pathD: 'M 585 265 C 605 238, 625 224, 642 212',
            en: { catLabel: 'VICTORIA HARBOUR CORRIDOR', name: 'Central / Sheung Wan ⟷ Hung Hom', cap: '100 Pax', evTime: '4.5 mins', dieselTime: '16 mins', chargeMin: '4m', charger: 'Sheung Wan 22kV Hub (Domestic Feeder)', notes: 'Reduces Central–Hung Hom crossing time from 16 minutes to 4.5 minutes, feeding Hung Hom commuters directly into Central/Sheung Wan.' },
            tc: { catLabel: '維多利亞港走廊', name: '中上環 ⟷ 紅磡', cap: '100 座', evTime: '4.5 分鐘', dieselTime: '16 分鐘', chargeMin: '4分', charger: '上環 22kV 樞紐快充 (純本地接駁)', notes: '將中上環至紅磡航程由 16 分鐘大幅縮短至 4.5 分鐘，免除九龍端繁複邊檢基建。' }
        },
        {
            id: 'vh-4', code: 'VH-04', cat: 'harbour', dist: 1.3, vessel: 'BAYWING-D3', speed: 26, kwh: 32, saveHKD: 2.81, co2: 920, defaultTrips: 12,
            pathD: 'M 695 259 C 675 238, 658 224, 642 212',
            en: { catLabel: 'VICTORIA HARBOUR CORRIDOR', name: 'North Point ⟷ Hung Hom', cap: '100 Pax', evTime: '3.5 mins', dieselTime: '8 mins', chargeMin: '3m', charger: 'HKE North Point / Floating BESS', notes: 'Rapid East-Harbour commuter link replacing slow displacement vessels with quiet air-conditioned electric shuttles.' },
            tc: { catLabel: '維多利亞港走廊', name: '北角 ⟷ 紅磡', cap: '100 座', evTime: '3.5 分鐘', dieselTime: '8 分鐘', chargeMin: '3分', charger: '北角港燈 / 浮式儲能站', notes: '東維港高速通勤線，以靜音全空調純電穿梭船取代老舊慢速柴油渡輪。' }
        },
        {
            id: 'vh-5', code: 'VH-05', cat: 'harbour', dist: 1.4, vessel: 'BAYWING-D3', speed: 26, kwh: 35, saveHKD: 3.04, co2: 990, defaultTrips: 12,
            pathD: 'M 695 259 C 690 232, 680 214, 672 198',
            en: { catLabel: 'VICTORIA HARBOUR CORRIDOR', name: 'North Point ⟷ Kowloon City', cap: '100 Pax', evTime: '4 mins', dieselTime: '9 mins', chargeMin: '3.5m', charger: 'Hub-and-Spoke Top-Up', notes: 'Direct cross-harbour link connecting North Point to Kowloon City and Kai Tak residential district in 4 minutes.' },
            tc: { catLabel: '維多利亞港走廊', name: '北角 ⟷ 九龍城', cap: '100 座', evTime: '4 分鐘', dieselTime: '9 分鐘', chargeMin: '3.5分', charger: '樞紐輻射補電', notes: '4 分鐘直達跨海走廊，緊密連接北角與九龍城及啟德住宅區。' }
        },
        {
            id: 'vh-6', code: 'VH-06', cat: 'harbour', dist: 1.9, vessel: 'BAYWING-D3', speed: 28, kwh: 48, saveHKD: 4.29, co2: 1410, defaultTrips: 12,
            pathD: 'M 695 259 C 705 234, 715 218, 722 204',
            en: { catLabel: 'VICTORIA HARBOUR CORRIDOR', name: 'North Point ⟷ Kwun Tong ⟷ Kai Tak', cap: '120 Pax + Bikes', evTime: '5 mins', dieselTime: '15 mins', chargeMin: '4m', charger: 'HKE / CLP 11kV BESS Hub', notes: 'Vital CBD2 commuter artery linking Hong Kong Island East with Kwun Tong Business Area and Kai Tak Sports Park.' },
            tc: { catLabel: '維多利亞港走廊', name: '北角 ⟷ 觀塘 ⟷ 啟德', cap: '120 座 + 單車', evTime: '5 分鐘', dieselTime: '15 分鐘', chargeMin: '4分', charger: '港燈 / 中電 11kV 儲能樞紐', notes: '東九龍 CBD2 核心水上動脈，5 分鐘連接港島東、觀塘商貿區及啟德體育園。' }
        },
        {
            id: 'vh-7', code: 'VH-07', cat: 'harbour', dist: 1.2, vessel: 'BAYWING-D2', speed: 26, kwh: 22, saveHKD: 2.26, co2: 740, defaultTrips: 12,
            pathD: 'M 748 264 C 755 248, 760 236, 765 225',
            en: { catLabel: 'VICTORIA HARBOUR CORRIDOR', name: 'Sai Wan Ho ⟷ Sam Ka Tsuen', cap: '40 Pax', evTime: '3.5 mins', dieselTime: '10 mins', chargeMin: '3m', charger: '500 kW BESS / LV', notes: 'Eastern harbour gateway linking Sai Wan Ho to Lei Yue Mun / Sam Ka Tsuen district in 3.5 minutes.' },
            tc: { catLabel: '維多利亞港走廊', name: '西灣河 ⟷ 三家村', cap: '40 座', evTime: '3.5 分鐘', dieselTime: '10 分鐘', chargeMin: '3分', charger: '500 kW 儲能 / 低壓', notes: '鯉魚門東部門戶航線，3.5 分鐘快速連接西灣河與三家村。' }
        },
        {
            id: 'vh-8', code: 'VH-08', cat: 'harbour', dist: 1.8, vessel: 'BAYWING-D3', speed: 28, kwh: 44, saveHKD: 3.74, co2: 1220, defaultTrips: 12,
            pathD: 'M 748 264 C 740 240, 730 220, 722 204',
            en: { catLabel: 'VICTORIA HARBOUR CORRIDOR', name: 'Sai Wan Ho ⟷ Kwun Tong', cap: '100 Pax', evTime: '4.5 mins', dieselTime: '15 mins', chargeMin: '4m', charger: 'HKE / CLP BESS Hub', notes: 'Cuts East Harbour commute time by 70% while saving HK$ 3.74M/year per vessel in diesel fuel.' },
            tc: { catLabel: '維多利亞港走廊', name: '西灣河 ⟷ 觀塘', cap: '100 座', evTime: '4.5 分鐘', dieselTime: '15 分鐘', chargeMin: '4分', charger: '港燈 / 中電儲能快充樞紐', notes: '將東維港跨海時間縮短 70%，每艘船每年節省高達 HK$ 374萬柴油開支。' }
        },
        {
            id: 'isl-1', code: 'ISL-01', cat: 'island', dist: 10.2, vessel: 'BAYWING-D5', speed: 34, kwh: 310, saveHKD: 6.79, co2: 2450, defaultTrips: 10,
            pathD: 'M 585 265 C 525 255, 495 345, 425 390',
            en: { catLabel: 'OUTLYING ISLANDS CORRIDOR', name: 'Central / Sheung Wan ⟷ Cheung Chau', cap: '400 Pax / 50t Freight', evTime: '20 mins', dieselTime: '35–55 mins', chargeMin: '9m', charger: 'Sheung Wan 22kV Hub', notes: 'Charges at the Sheung Wan 22 kV Hub (3×1,500 kVA + BESS) and flies to Cheung Chau in 20 mins; overnight 400V slow trickle at Cheung Chau.' },
            tc: { catLabel: '中環離島走廊', name: '中上環 ⟷ 長洲', cap: '400 座 / 50噸貨', evTime: '20 分鐘', dieselTime: '35–55 分鐘', chargeMin: '9分', charger: '上環 22kV 主樞紐快充', notes: '日間於上環 22 kV 主樞紐 (3×1,500 kVA + 儲能) 極速補電，20 分鐘直達長洲；夜間泊船時使用長洲現有 400V 慢充。' }
        },
        {
            id: 'isl-2', code: 'ISL-02', cat: 'island', dist: 9.5, vessel: 'BAYWING-D5', speed: 34, kwh: 290, saveHKD: 6.40, co2: 2310, defaultTrips: 10,
            pathD: 'M 585 265 C 520 250, 455 282, 392 292',
            en: { catLabel: 'OUTLYING ISLANDS CORRIDOR', name: 'Central / Sheung Wan ⟷ Mui Wo (Lantau)', cap: '400 Pax / 50t Freight', evTime: '18 mins', dieselTime: '35–55 mins', chargeMin: '8.5m', charger: 'Sheung Wan 22kV Hub', notes: 'Transforms South Lantau commuting into an 18-minute smooth hydrofoil transit with 90-second modular cargo swaps.' },
            tc: { catLabel: '中環離島走廊', name: '中上環 ⟷ 梅窩 (大嶼山)', cap: '400 座 / 50噸貨', evTime: '18 分鐘', dieselTime: '35–55 分鐘', chargeMin: '8.5分', charger: '上環 22kV 主樞紐快充', notes: '將大嶼山梅窩通勤縮短至 18 分鐘平穩水翼航程，並支援 90 秒模組化滾裝貨櫃更換。' }
        },
        {
            id: 'isl-3', code: 'ISL-03', cat: 'island', dist: 8.0, vessel: 'BAYWING-D4', speed: 35, kwh: 195, saveHKD: 5.30, co2: 1890, defaultTrips: 10,
            pathD: 'M 585 265 C 540 252, 505 262, 468 272',
            en: { catLabel: 'OUTLYING ISLANDS CORRIDOR', name: 'Central / Sheung Wan ⟷ Peng Chau', cap: '220 Pax / 20t Freight', evTime: '15 mins', dieselTime: '27–40 mins', chargeMin: '8m', charger: 'Sheung Wan 22kV Hub (Touch & Go at Island)', notes: '15-minute express hydrofoil service to Peng Chau. Zero grid upgrade needed on Peng Chau—100% charged at Sheung Wan 22 kV Hub.' },
            tc: { catLabel: '中環離島走廊', name: '中上環 ⟷ 坪洲', cap: '220 座 / 20噸貨', evTime: '15 分鐘', dieselTime: '27–40 分鐘', chargeMin: '8分', charger: '上環 22kV 快充 (坪洲即停即走)', notes: '15 分鐘極速直達坪洲。坪洲碼頭無需高壓電網改造，船隻 100% 於上環 22 kV 主樞紐補電。' }
        },
        {
            id: 'isl-4', code: 'ISL-04', cat: 'island', dist: 6.2, vessel: 'BAYWING-D4', speed: 35, kwh: 150, saveHKD: 4.99, co2: 1760, defaultTrips: 11,
            pathD: 'M 585 265 C 535 262, 535 335, 565 382',
            en: { catLabel: 'OUTLYING ISLANDS CORRIDOR', name: 'Central / Sheung Wan ⟷ Yung Shue Wan (Lamma)', cap: '220 Pax / 20t Freight', evTime: '12 mins', dieselTime: '27 mins', chargeMin: '7m', charger: 'Sheung Wan 22kV Hub', notes: 'Routes smoothly around Kennedy Town through the East Lamma Channel in 12 minutes, charged solely at Sheung Wan 22 kV Hub.' },
            tc: { catLabel: '中環離島走廊', name: '中上環 ⟷ 榕樹灣 (南丫島)', cap: '220 座 / 20噸貨', evTime: '12 分鐘', dieselTime: '27 分鐘', chargeMin: '7分', charger: '上環 22kV 主樞紐快充', notes: '繞經堅尼地城水道直達榕樹灣僅需 12 分鐘，於上環 22 kV 樞紐完成單端快充。' }
        },
        {
            id: 'isl-5', code: 'ISL-05', cat: 'island', dist: 7.8, vessel: 'BAYWING-D4', speed: 35, kwh: 185, saveHKD: 4.76, co2: 1680, defaultTrips: 9,
            pathD: 'M 585 265 C 525 262, 520 385, 585 422',
            en: { catLabel: 'OUTLYING ISLANDS CORRIDOR', name: 'Central / Sheung Wan ⟷ Sok Kwu Wan (Lamma)', cap: '200 Pax', evTime: '15 mins', dieselTime: '30–35 mins', chargeMin: '8m', charger: 'Sheung Wan 22kV Hub', notes: '15-minute high-speed foil transit around western Hong Kong Island to Sok Kwu Wan with zero island grid modifications.' },
            tc: { catLabel: '中環離島走廊', name: '中上環 ⟷ 索罟灣 (南丫島)', cap: '200 座', evTime: '15 分鐘', dieselTime: '30–35 分鐘', chargeMin: '8分', charger: '上環 22kV 主樞紐快充', notes: '15 分鐘高速水翼直達索罟灣，離島端零電網改造，100% 由上環 22 kV 樞紐供電。' }
        },
        {
            id: 'isl-6', code: 'ISL-06', cat: 'island', dist: 8.2, vessel: 'BAYWING-D4', speed: 35, kwh: 200, saveHKD: 6.16, co2: 2180, defaultTrips: 11,
            pathD: 'M 585 265 C 530 245, 480 245, 430 252',
            en: { catLabel: 'OUTLYING ISLANDS CORRIDOR', name: 'Central / Sheung Wan ⟷ Discovery Bay', cap: '220 Pax', evTime: '15 mins', dieselTime: '25 mins', chargeMin: '8m', charger: 'Sheung Wan 22kV Hub', notes: 'Zero-emission commuter flagship for Discovery Bay residents, cutting transit time to 15 minutes and saving HK$ 6.16M/yr per vessel.' },
            tc: { catLabel: '中環離島走廊', name: '中上環 ⟷ 愉景灣', cap: '220 座', evTime: '15 分鐘', dieselTime: '25 分鐘', chargeMin: '8分', charger: '上環 22kV 主樞紐快充', notes: '配合愉景灣零碳社區定位的高速純電水翼船，15 分鐘直達中上環，單船每年節省 HK$ 616萬油費。' }
        },
        {
            id: 'isl-7', code: 'ISL-07', cat: 'island', dist: 7.5, vessel: 'BAYWING-D4', speed: 35, kwh: 180, saveHKD: 5.15, co2: 1820, defaultTrips: 10,
            pathD: 'M 585 265 C 520 245, 485 225, 468 192',
            en: { catLabel: 'OUTLYING ISLANDS CORRIDOR', name: 'Central / Sheung Wan ⟷ Ma Wan (Park Island)', cap: '200 Pax', evTime: '14 mins', dieselTime: '25 mins', chargeMin: '7.5m', charger: 'Sheung Wan 22kV Hub', notes: '14-minute curved fairway link from Central/Sheung Wan through Kap Shui Mun to Park Island (Ma Wan).' },
            tc: { catLabel: '中環離島走廊', name: '中上環 ⟷ 馬灣 (珀麗灣)', cap: '200 座', evTime: '14 分鐘', dieselTime: '25 分鐘', chargeMin: '7.5分', charger: '上環 22kV 主樞紐快充', notes: '14 分鐘由中上環經汲水門水道平穩直達馬灣珀麗灣。' }
        },
        {
            id: 'isl-8', code: 'ISL-08', cat: 'island', dist: 9.8, vessel: 'BAYWING-D3', speed: 30, kwh: 190, saveHKD: 3.82, co2: 1350, defaultTrips: 6,
            pathD: 'M 468 272 C 435 278, 410 285, 392 292 C 395 335, 405 365, 425 390',
            en: { catLabel: 'OUTLYING ISLANDS CORRIDOR', name: 'Peng Chau ⟷ Mui Wo ⟷ Chi Ma Wan ⟷ Cheung Chau', cap: '100 Pax + Freight', evTime: '24 mins total', dieselTime: '50 mins total', chargeMin: '0m at Spokes', charger: 'Hub-Charged (Zero Power at Chi Ma Wan)', notes: 'Demonstrates our Hub-and-Spoke architecture: unpowered rural stops like Chi Ma Wan operate as 60-second touch-and-go stops with zero pier grid power required.' },
            tc: { catLabel: '中環離島走廊', name: '坪洲 ⟷ 梅窩 ⟷ 芝麻灣 ⟷ 長洲 (橫水渡)', cap: '100 座 + 貨物', evTime: '全程 24 分鐘', dieselTime: '全程 50 分鐘', chargeMin: '支線免充電', charger: '母港充飽・芝麻灣 60秒即停即走', notes: '完美展示「母港快充、支線即停即走」架構：如芝麻灣等無電網鄉郊碼頭完全無需鋪設電纜，船隻靠自身大電池完成環線。' }
        },
        {
            id: 'isl-9', code: 'ISL-09', cat: 'island', dist: 6.5, vessel: 'BAYWING-D2', speed: 30, kwh: 95, saveHKD: 3.20, co2: 1100, defaultTrips: 8,
            pathD: 'M 585 265 C 590 230, 625 215, 675 215 C 710 215, 722 204, 695 250 C 655 260, 615 262, 585 265',
            en: { catLabel: 'OUTLYING ISLANDS CORRIDOR', name: 'Water Taxi (Circular Harbour Loop)', cap: '40 VIP Pax', evTime: '18 mins loop', dieselTime: '45 mins loop', chargeMin: '6m', charger: 'Sheung Wan 22kV Hub', notes: 'Silent panoramic electric hydrofoil loop connecting Sheung Wan, Central, West Kowloon, TST East, and Kai Tak.' },
            tc: { catLabel: '中環離島走廊', name: '香港水上的士 (維港環線)', cap: '40 尊尚座', evTime: '18 分鐘環線', dieselTime: '45 分鐘環線', chargeMin: '6分', charger: '上環 22kV 主樞紐快充', notes: '超靜音全景式純電水翼觀光及接駁環線，串聯上環、中環、西九、尖東及啟德。' }
        },
        {
            id: 'reg-1', code: 'REG-01', cat: 'regional', dist: 14.5, vessel: 'BAYWING-D4', speed: 35, kwh: 320, saveHKD: 5.77, co2: 2040, defaultTrips: 6,
            pathD: 'M 305 152 C 315 190, 322 220, 325 248 C 275 242, 215 265, 202 305 C 200 322, 210 330, 222 332',
            en: { catLabel: 'REGIONAL COASTAL CORRIDOR', name: 'Tuen Mun ⟷ Tung Chung ⟷ Sha Lo Wan ⟷ Tai O', cap: '200 Pax', evTime: '26 mins', dieselTime: '55 mins', chargeMin: '11m', charger: 'Tuen Mun CLP 11kV Hub (Touch & Go at Tai O)', notes: 'Charges at Tuen Mun CLP 11 kV Hub and performs zero-power touch-and-go stops at Sha Lo Wan and Tai O.' },
            tc: { catLabel: '區域常規走廊', name: '屯門 ⟷ 東涌 ⟷ 沙螺灣 ⟷ 大澳', cap: '200 座', evTime: '26 分鐘', dieselTime: '55 分鐘', chargeMin: '11分', charger: '屯門中電 11kV 樞紐 (沙螺灣/大澳即停即走)', notes: '於屯門中電 11 kV 樞紐補電，沙螺灣及大澳無需高壓電網改造，並以靜音電驅保護中華白海豚海岸公園。' }
        },
        {
            id: 'reg-2', code: 'REG-02', cat: 'regional', dist: 2.8, vessel: 'BAYWING-D2', speed: 30, kwh: 42, saveHKD: 2.65, co2: 890, defaultTrips: 12,
            pathD: 'M 505 156 C 492 168, 480 180, 468 192',
            en: { catLabel: 'REGIONAL COASTAL CORRIDOR', name: 'Tsuen Wan ⟷ Ma Wan (Park Island)', cap: '40 Pax', evTime: '6 mins', dieselTime: '13 mins', chargeMin: '5m', charger: 'Tsuen Wan CLP 500 kW BESS', notes: '6-minute rapid shuttle between Tsuen Wan West and Park Island using the compact 15m BAYWING-D2.' },
            tc: { catLabel: '區域常規走廊', name: '荃灣 ⟷ 馬灣 (珀麗灣)', cap: '40 座', evTime: '6 分鐘', dieselTime: '13 分鐘', chargeMin: '5分', charger: '荃灣中電 500 kW 儲能站', notes: '採用 15 米 BAYWING-D2，6 分鐘極速穿梭荃灣西與馬灣珀麗灣。' }
        },
        {
            id: 'reg-3', code: 'REG-03', cat: 'regional', dist: 4.5, vessel: 'BAYWING-D2', speed: 32, kwh: 68, saveHKD: 3.04, co2: 1020, defaultTrips: 10,
            pathD: 'M 612 336 C 590 350, 578 365, 565 382',
            en: { catLabel: 'REGIONAL COASTAL CORRIDOR', name: 'Aberdeen ⟷ Pak Kok Tsuen ⟷ Yung Shue Wan', cap: '40 Pax + Freight', evTime: '9 mins', dieselTime: '25 mins', chargeMin: '6m', charger: 'Aberdeen HKE BESS (Touch & Go at Pak Kok)', notes: 'Replaces noisy diesel kaito ferries with a 9-minute stabilized hydrofoil shuttle between Aberdeen and North Lamma.' },
            tc: { catLabel: '區域常規走廊', name: '香港仔 ⟷ 北角村 ⟷ 榕樹灣 (南丫島)', cap: '40 座 + 貨物', evTime: '9 分鐘', dieselTime: '25 分鐘', chargeMin: '6分', charger: '香港仔港燈儲能站 (北角村即停即走)', notes: '以 9 分鐘平穩水翼快船取代傳統柴油街渡，北角村無需岸電設施。' }
        },
        {
            id: 'reg-4', code: 'REG-04', cat: 'regional', dist: 4.8, vessel: 'BAYWING-D2', speed: 32, kwh: 72, saveHKD: 3.20, co2: 1080, defaultTrips: 10,
            pathD: 'M 612 336 C 615 375, 605 405, 585 422',
            en: { catLabel: 'REGIONAL COASTAL CORRIDOR', name: 'Aberdeen ⟷ Sok Kwu Wan (via Mo Tat)', cap: '40 Pax + Freight', evTime: '10 mins', dieselTime: '28 mins', chargeMin: '6.5m', charger: 'Aberdeen HKE BESS (Touch & Go at Mo Tat)', notes: '10-minute South Hong Kong Island link to Mo Tat and Sok Kwu Wan, eliminating East Lamma Channel rolling.' },
            tc: { catLabel: '區域常規走廊', name: '香港仔 ⟷ 索罟灣 (經模達灣)', cap: '40 座 + 貨物', evTime: '10 分鐘', dieselTime: '28 分鐘', chargeMin: '6.5分', charger: '香港仔港燈儲能站 (模達灣即停即走)', notes: '10 分鐘連接香港仔、模達灣及索罟灣，徹底消除東博寮海峽橫風浪搖晃。' }
        },
        {
            id: 'reg-5', code: 'REG-05', cat: 'regional', dist: 3.2, vessel: 'BAYWING-D2', speed: 30, kwh: 48, saveHKD: 2.42, co2: 810, defaultTrips: 10,
            pathD: 'M 430 252 C 442 268, 425 285, 392 292',
            en: { catLabel: 'REGIONAL COASTAL CORRIDOR', name: 'Discovery Bay ⟷ Mui Wo', cap: '40 Pax + Bikes', evTime: '7 mins', dieselTime: '20 mins', chargeMin: '5m', charger: 'Overnight LV Trickle / Hub Top-Up', notes: '7-minute inter-Lantau zero-emission connector utilizing existing island low-voltage overnight charging.' },
            tc: { catLabel: '區域常規走廊', name: '愉景灣 ⟷ 梅窩', cap: '40 座 + 單車', evTime: '7 分鐘', dieselTime: '20 分鐘', chargeMin: '5分', charger: '夜間低壓慢充 / 母港補電', notes: '7 分鐘大嶼山區內零排放接駁線，無需於大嶼山興建大型高壓變電站。' }
        },
        {
            id: 'reg-6', code: 'REG-06', cat: 'regional', dist: 1.6, vessel: 'BAYWING-D2', speed: 26, kwh: 24, saveHKD: 2.03, co2: 680, defaultTrips: 12,
            pathD: 'M 430 252 C 448 258, 458 265, 468 272',
            en: { catLabel: 'REGIONAL COASTAL CORRIDOR', name: 'Discovery Bay ⟷ Peng Chau / Trappist Monastery', cap: '40 Pax', evTime: '4 mins', dieselTime: '10 mins', chargeMin: '3m', charger: 'Touch & Go (Zero Pier Power Needed)', notes: 'Replaces diesel kaito service with a 4-minute silent electric shuttle hop between Discovery Bay and Peng Chau.' },
            tc: { catLabel: '區域常規走廊', name: '愉景灣 ⟷ 坪洲 / 神樂院', cap: '40 座', evTime: '4 分鐘', dieselTime: '10 分鐘', chargeMin: '3分', charger: '即停即走（神樂院零電力需求）', notes: '以 4 分鐘純電靜音穿梭艇取代傳統柴油街渡，神樂院等小碼頭無需任何電力基建。' }
        },
        {
            id: 'gba-1', code: 'GBA-01', cat: 'gba', dist: 36.0, vessel: 'BAYWING EF-150', speed: 38, kwh: 640, saveHKD: 14.43, co2: 5120, defaultTrips: 4,
            pathD: 'M 585 265 C 510 255, 475 385, 360 412 C 260 430, 185 412, 115 395',
            en: { catLabel: 'GBA CROSS-BORDER CORRIDOR', name: 'HK Sheung Wan (22kV CIQ Water-Airport) ⟷ Macau (Taipa / Outer Harbour)', cap: '150 VIP Pax', evTime: '55 mins', dieselTime: '60 mins', chargeMin: '12m', charger: 'Sheung Wan 22kV MCS + Macau 400V-to-BESS Buffer', notes: 'Flagship uncapped-yield corridor: powered at Sheung Wan (GIS: 22.290175, 114.148746) by our 22 kV Concrete Substation (≥7.0 mPD, 3×1,500 kVA + BESS) and at Macau Outer Harbour/Taipa by a dockside BESS buffer fed from DSMM-confirmed 400V surplus reserves.' },
            tc: { catLabel: '大灣區跨境走廊', name: '香港上環 (22kV 水上機場口岸) ⟷ 澳門 (氹仔 / 外港)', cap: '150 尊尚座', evTime: '55 分鐘', dieselTime: '60 分鐘', chargeMin: '12分', charger: '香港上環 22kV 快充 + 澳門 400V 儲能緩衝', notes: '港澳高毛利核心旗艦走廊：香港端由上環 (22.290175, 114.148746) ≥7.0 mPD 混凝土變電站 (3×1,500 kVA) 直供；澳門端利用海事局確認之 400V 庫餘電量配合岸基儲能櫃 (BESS) 緩衝輸出兆瓦級補電。' }
        },
        {
            id: 'gba-2', code: 'GBA-02', cat: 'gba', dist: 22.0, vessel: 'BAYWING EF-150', speed: 38, kwh: 390, saveHKD: 10.30, co2: 3650, defaultTrips: 5,
            pathD: 'M 585 265 C 515 245, 485 195, 435 182 C 335 165, 235 135, 155 95',
            en: { catLabel: 'GBA CROSS-BORDER CORRIDOR', name: 'HK Sheung Wan (22kV CIQ Water-Airport) ⟷ Shenzhen Shekou', cap: '150 VIP Pax', evTime: '38 mins', dieselTime: '50 mins', chargeMin: '10m', charger: '3.5 MW MCS (Sheung Wan 22kV Hub)', notes: 'Medium-range uncapped commercial route connecting Hong Kong Island’s financial core with Shenzhen Qianhai/Shekou in 38 minutes.' },
            tc: { catLabel: '大灣區跨境走廊', name: '香港上環 (22kV 水上機場口岸) ⟷ 深圳蛇口', cap: '150 尊尚座', evTime: '38 分鐘', dieselTime: '50 分鐘', chargeMin: '10分', charger: '3.5 MW MCS (上環 22kV 樞紐)', notes: '中距離高收益商業航線，38 分鐘連接香港核心金融區與深圳前海/蛇口科創中心。' }
        },
        {
            id: 'gba-3', code: 'GBA-03', cat: 'gba', dist: 25.0, vessel: 'BAYWING EF-150', speed: 38, kwh: 440, saveHKD: 11.31, co2: 4010, defaultTrips: 5,
            pathD: 'M 325 248 C 285 205, 225 145, 155 95',
            en: { catLabel: 'GBA CROSS-BORDER CORRIDOR', name: 'HKIA SkyPier (Airside APM Transfer) ⟷ Shenzhen Airport (SZX) / Macau', cap: '150 Pax + Through-Baggage', evTime: '40 mins', dieselTime: '50 mins', chargeMin: '11m', charger: '3.5 MW SkyPier Airside MCS', notes: 'Airline feeder model: international passengers step off HKIA Terminal 1 onto the underground Automated People Mover (APM) to SkyPier with zero HK immigration friction and fly at 38 knots straight to Shenzhen Airport or Macau.' },
            tc: { catLabel: '大灣區跨境走廊', name: '香港機場海天碼頭 (禁區無人駕駛列車轉乘) ⟷ 深圳寶安機場 / 澳門', cap: '150 座 + 直掛行李艙', evTime: '40 分鐘', dieselTime: '50 分鐘', chargeMin: '11分', charger: '3.5 MW 海天碼頭禁區 MCS', notes: '航空公司聯運接駁模式：國際轉機旅客由香港機場一號客運大樓乘搭地下無人駕駛列車 (APM) 直達海天碼頭禁區，免過香港海關及入境處，40 分鐘直達深圳寶安機場或澳門。' }
        },
        {
            id: 'gba-4', code: 'GBA-04', cat: 'gba', dist: 35.0, vessel: 'BAYWING EF-150', speed: 38, kwh: 620, saveHKD: 13.88, co2: 4920, defaultTrips: 4,
            pathD: 'M 585 265 C 510 255, 470 375, 355 402 C 255 418, 185 405, 115 395',
            en: { catLabel: 'GBA CROSS-BORDER CORRIDOR', name: 'HK Sheung Wan (22kV CIQ Water-Airport) ⟷ Zhuhai Jiuzhou', cap: '150 VIP Pax', evTime: '54 mins', dieselTime: '65 mins', chargeMin: '12m', charger: '3.5 MW MCS (Sheung Wan 22kV Hub)', notes: 'Direct CBD-to-CBD hydrofoil fairway from Sheung Wan to Zhuhai Jiuzhou Port with active 100Hz wave stabilization.' },
            tc: { catLabel: '大灣區跨境走廊', name: '香港上環 (22kV 水上機場口岸) ⟷ 珠海九洲港', cap: '150 尊尚座', evTime: '54 分鐘', dieselTime: '65 分鐘', chargeMin: '12分', charger: '3.5 MW MCS (上環 22kV 樞紐)', notes: '由上環水上機場直達珠海九洲港的零暈船高速水翼航線，比傳統雙體船快超過 10 分鐘。' }
        },
        {
            id: 'gba-5', code: 'GBA-05', cat: 'gba', dist: 34.0, vessel: 'BAYWING EF-150', speed: 38, kwh: 600, saveHKD: 13.42, co2: 4780, defaultTrips: 4,
            pathD: 'M 325 248 C 265 210, 200 150, 155 95',
            en: { catLabel: 'GBA CROSS-BORDER CORRIDOR', name: 'HKG SkyPier & Sheung Wan CIQ ⟷ Nansha / Dongguan / Pazhou', cap: '150 Pax + Luggage', evTime: '52 mins', dieselTime: '65 mins', chargeMin: '12m', charger: '3.5 MW SkyPier & Sheung Wan 22kV MCS', notes: 'Connects Pearl River Delta manufacturing and exhibition hubs directly to HKIA SkyPier airside departures and Sheung Wan CIQ.' },
            tc: { catLabel: '大灣區跨境走廊', name: '海天碼頭及上環口岸 ⟷ 廣州南沙 / 東莞虎門 / 琶洲', cap: '150 座 + 行李艙', evTime: '52 分鐘', dieselTime: '65 分鐘', chargeMin: '12分', charger: '3.5 MW 海天碼頭及上環 22kV MCS', notes: '直接連通廣州南沙、琶洲及東莞製造業基地至香港國際機場禁區及上環口岸。' }
        }
    ],

    // 5. OFFICIAL STAKEHOLDER CORRESPONDENCE LOGS (14 ITEMS, UPDATED FOR 28 OCT EEB/LANDSD GIS & CLP CALL, ZERO EMAILS)
    stakeholderLogs: [
        {
            id: 'log-14', cat: 'utility', borderCls: 'border-l-tech-emerald', badgeCls: 'bg-tech-emerald/20 text-tech-emerald',
            date: '28 Oct 2026 (4:41 PM Official EEB Reply & LandsD GIS Filing)',
            en: {
                status: 'GIS (22.290175, 114.148746) & CAP. 127 MARINE DECK FILED W/ LANDSD',
                agency: 'Environment and Ecology Bureau (Queenie Chau) & District Lands Office (HKW&S — Nathan Kong)',
                title: '1. EEB & LandsD Sheung Wan Site Lot Confirmation: GIS 22.290175° N, 114.148746° E (Adjacent to HKE Zone Sub & Fire Services HQ)',
                summary: 'On 28 Oct 2026 at 4:41 PM, Environmental Protection Officer Ms. Queenie Chau (Environment and Ecology Bureau) replied noting our target Sheung Wan waterfront site and advising us to specify the exact lot/site coordinates with the Lands Department (DLO/HKW&S) to ascertain the managing department(s). Filed formal specification locking in GIS coordinates 22.290175° N, 114.148746° E at Sheung Wan Landing No. 1 (Sai Fire Services Street / Chung Kong Road)—directly fronting the HKE 132/22 kV Zone Substation and adjacent to the Fire Services Department HK Island Headquarters—under a Cap. 127 Foreshore/Seabed Marine Deck & Public Utility Nominal-Premium Grant framework.',
                thread: `28 Oct 2026 (4:41 PM — Official Reply from Ms. Queenie YM Chau, Environmental Protection Officer, Air Policy Division, Environment and Ecology Bureau):
"Dear Mr Tu, Thank you for your correspondence dated 22 October 2026 regarding 'Joint Infrastructure & Land Allocation Proposal: Greenfield 22 kV Marine EV Fast-Charging Terminal at Sheung Wan Waterfront'. We note that the target development location is 'Government waterfront land / seawall apron immediately west of Shun Tak Centre (HK–Macau Ferry Terminal) and adjacent to Sheung Wan Landing No. 1'. As the proposed location involves different government land lots which are managed by different departments... we suggest that you first confirm the specific details of the proposed site, such as the lot number, and then contact the Lands Department to ascertain the relevant managing department and to follow up further on the matter."

28 Oct 2026 (Aero-Marine Systems Technical & GIS Filing to District Lands Office [HKW&S] & EEB):
- Exact GIS Coordinates: 22.290175° N, 114.148746° E (Sheung Wan Landing No. 1, Northern Terminus of Sai Fire Services Street off Chung Kong Road).
- Strategic Utility & Safety Adjacency: Directly opposite (~50m) HK Electric's Sheung Wan 132/22 kV Zone Substation and immediately adjacent to the Fire Services Department HK Island Headquarters.
- Cap. 127 Marine Deck & Water-Airport CIQ Architecture: Seaward piled concrete marine deck over foreshore/seabed (Cap. 127 / Public Utility Nominal-Premium Grant) housing our FFL ≥ +7.0 mPD 22 kV Concrete Substation, 1.5 MWh BESS, 3.5 MW MCS arm, Dual Domestic/International CIQ concourse, and +7.0 mPD covered walkway link to Shun Tak Centre / Sheung Wan MTR.`
            },
            tc: {
                status: '已向地政總署遞交精確 GIS 座標 (22.290175, 114.148746) 及海床結構申報',
                agency: '環境及生態局 (周環境保護主任 Queenie Chau) 及 地政總署港島西及南區地政處 (江先生 Nathan Kong)',
                title: '1. 環境及生態局與地政總署上環選址確認：GIS 座標 22.290175° N, 114.148746° E（毗鄰港燈分區變電站及消防處港島總部）',
                summary: '環境及生態局空氣政策組環境保護主任 Queenie Chau 於 2026年10月28日 下午4:41 正式回函，建議本司明確列出擬議選址之具體地段座標並向地政總署跟進相關管理部門及審批程序。本司已即時提交精確 GIS 座標 (22.290175° N, 114.148746° E，位於西消防街北端之上環一號梯台，正對上環 132/22 kV 分區變電站並緊貼消防處港島總部)，申請以《前濱及海床(填海工程)條例》(第127章) 海上樁柱平台及公用事業象徵式地價批地模式興建上環 22 kV 水上機場樞紐。',
                thread: `2026年10月28日 下午4:41 環境及生態局環境保護主任 Queenie Chau 正式回函：
「感謝閣下於 2026年10月22日 就『上環海濱 22 kV 綠地純電渡輪快充碼頭聯合基建及撥地建議書』之來函。由於擬議位置涉及不同部門管理之政府土地地段，本局建議閣下先確認擬議選址之具體細節（如地段編號或精確位置），並聯絡地政總署以確定相關管理部門及作進一步跟進。」

2026年10月28日 Aero-Marine Systems 向地政總署 (港島西及南區) 及環境局遞交之精確座標與海床平台申報：
- 精確 GIS 座標：22.290175° N, 114.148746° E（中港道／西消防街北端之上環一號梯台海堤及毗鄰前濱海床）。
- 電力與消防安全完美協同：正對港燈上環分區變電站（僅約 50 米），且緊鄰消防處港島及離島區總部，極大化 22 kV 變電站與 1.5 MWh 儲能庫之消防審批優勢。
- 雙區水上機場及行人天橋接駁：包含本地與跨境 (CIQ) 雙候船區，並建議沿中西區海濱長廊興建 +7.0 mPD 有蓋高架行人道連接信德中心及上環港鐵站。`
            }
        },
        {
            id: 'log-12', cat: 'utility', borderCls: 'border-l-tech-amber', badgeCls: 'bg-tech-amber/20 text-tech-amber',
            date: '28 Oct 2026 (10:00 AM Teams Call Completed)',
            en: {
                status: 'CLP CALL COMPLETED: KOWLOON SIMPLIFIED TO DOMESTIC FEEDER',
                agency: 'CLP Power Hong Kong — Marine eMobility (Catherine / Marine Energy Infrastructure)',
                title: '2. CLP Marine eMobility Call Outcome: TST Heritage Constraint Confirmed & Consolidation of 100% CIQ/Megawatt Charging at Sheung Wan',
                summary: 'Completed Microsoft Teams engineering session on 28 Oct 2026 (10:00 AM) with Catherine of CLP Marine eMobility: (1) CLP confirmed that retrofitting the legacy Tsim Sha Tsui Star Ferry Pier is unfeasible due to heritage preservation rules and spatial congestion; (2) Based on this constraint, Aero-Marine Systems simplified our Kowloon strategy—eliminating complex passport-control (CIQ) on the Kowloon side and operating Kowloon piers as frictionless domestic feeder stops (100% charged on the HKE Sheung Wan 22 kV side or via Floating BESS), while positioning Tsing Yi / West Kowloon industrial marine lots for our overnight vessel maintenance depot; and (3) Connected CLP Marine eMobility directly with HK Electric Distribution Planning (Mr. Ting & Howard Leung).',
                thread: `28 Oct 2026 (10:00 AM — Microsoft Teams Engineering Call with Catherine, CLP Marine eMobility):
- TST Pier Heritage & Space Constraint: CLP confirmed that existing TST ferry pier retrofits are blocked by heritage preservation restrictions and spatial limits.
- Strategic Simplification (Single CIQ Water-Airport at Sheung Wan): Rather than duplicating passport control in congested Kowloon, 100% of cross-border CIQ and 22 kV megawatt charging is consolidated at our Sheung Wan 22 kV Hub. Kowloon commuters take a 3-minute domestic electric shuttle or bus/MTR to Sheung Wan to board GBA/Macau flights.
- Off-Site Maintenance Depot (Tsing Yi / West Kowloon): Identified industrial marine zones in CLP territory (Tsing Yi / Stonecutters) for overnight haul-out foil inspection, debris repair, and 11 kV slow balance charging.
- Direct HKE ↔ CLP Utility Bridge: Shared official contact details for HK Electric's Distribution Planning & EV team (Mr. Ting & Mr. Howard Leung) with CLP.`
            },
            tc: {
                status: '已完成中電會議：確立九龍純本地接駁及上環單一跨境樞紐策略',
                agency: '中華電力 (CLP Power) — Marine eMobility 海事電氣化基建部 (Catherine)',
                title: '2. 中電 Marine eMobility 視像會議成果：確認尖沙咀古蹟限制、簡化九龍為純本地接駁並集中 100% 跨境口岸於上環 22 kV 水上機場',
                summary: '於 2026年10月28日 上午10:00 與中華電力 Marine eMobility 代表 Catherine 完成 Microsoft Teams 工程會議：(1) 中電確認現有尖沙咀天星碼頭受古蹟保育及空間擠迫限制無法改建；(2) 據此，本司果斷簡化九龍端定位——免除於九龍興建繁複之出入境海關口岸，九龍碼頭僅作「純本地免充電即停即走接駁站」（100% 由港島上環 22 kV 樞紐供電，或配合浮式儲能船），並將青衣／昂船洲工業海事用地定位為夜間吊裝維修船塢；(3) 已正式引薦港燈配電規劃部丁工程師及 Howard Leung 予中電團隊直接交流。',
                thread: `2026年10月28日 上午10:00 中華電力 Marine eMobility (Catherine) Teams 會議紀錄要點：
- 舊尖沙咀碼頭古蹟與空間限制：中電確認現有尖沙咀渡輪碼頭因古蹟保育問題及空間不足無法加裝高壓充電設施。
- 集中資源於上環單一「水上機場」口岸：免除九龍端邊檢紅線與土地爭奪，將 100% 跨境 CIQ 及 22 kV 兆瓦快充集中於上環一號梯台水上機場；九龍乘客可經 3 分鐘跨海純電穿梭船或巴士/港鐵前往上環轉乘港澳及大灣區高速航線。
- 青衣夜間維修基地及兩電對接：規劃於青衣工業海事區設立夜間水翼檢修基地，並已促成中電與港燈工程團隊直接聯繫。`
            }
        },
        {
            id: 'log-13', cat: 'utility', borderCls: 'border-l-tech-cyan', badgeCls: 'bg-tech-cyan/20 text-tech-cyan',
            date: '27 Oct 2026 (2:58 PM Official DSMM Response)',
            en: {
                status: 'MACAO DSMM 400V SHORE-POWER & ROUTE GUIDELINE RECEIVED',
                agency: 'Marine and Water Bureau, Macao SAR (DSMM) & Referral to Macao DSPA',
                title: '3. Macao DSMM Official Response: 400V Terminal Reserve Confirmation, BESS Buffer Validation & DSPA Green Fund Referral',
                summary: 'On 27 Oct 2026 (2:58 PM), the Marine and Water Bureau of Macao SAR (DSMM) formally replied regarding our GBA-01 (HK Sheung Wan ⟷ Macao Outer Harbour / Taipa) electric hydrofoil corridor: (1) Confirmed that Outer Harbour and Taipa Ferry Terminals hold surplus power reserves available for pure-electric vessels at 400V (validating our dockside 400V-to-BESS buffer step-up architecture); (2) Outlined compliance under 1972 COLREGs, Notices No. 1/98 & 3/2022, Administrative Regulation No. 34/2009 ("Maritime Passenger Transport"), and DSMM safety inspection; and (3) Formally recommended consulting the Macao Environmental Protection Bureau (DSPA) and Environmental Protection and Energy Conservation Fund for green incentives.',
                thread: `27 Oct 2026 (2:58 PM — Official Response from Marine and Water Bureau, Macao SAR [DSMM]):
1. Navigational & Safety Rules: All vessels including electric passenger ships in Macao waters must comply with 1972 COLREGs, Regulations on Maritime Activities, DSMM Notices No. 1/98 and No. 3/2022, and pass DSMM vessel safety inspection.
2. Passenger Transport Licensing: Routes must be operated in accordance with Administrative Regulation No. 34/2009 ("Maritime Passenger Transport") by licensed operators.
3. Terminal Shore Power Reserves (400V): "Regarding shore power supply for passenger terminals, the Outer Harbour Ferry Terminal and Taipa Ferry Terminal have surplus power reserves that can be allocated to provide limited power replenishment for pure electric vessels, but only 400V charging voltage can be provided."
4. Green Incentives Referral: Recommended consulting the Macao Environmental Protection Bureau (DSPA) and the Environmental Protection and Energy Conservation Fund.`
            },
            tc: {
                status: '已獲澳門海事局確認外港/氹仔 400V 岸電及營運指引',
                agency: '澳門特別行政區政府海事及水務局 (DSMM) 及轉介澳門環境保護局 (DSPA)',
                title: '3. 澳門海事及水務局正式回函：確認外港及氹仔碼頭 400V 庫餘岸電、航線法規及轉介環保與節能基金',
                summary: '澳門海事及水務局 (DSMM) 於 2026年10月27日 下午2:58 就 GBA-01（香港上環 ⟷ 澳門外港／氹仔）純電水翼船走廊正式回函：(1) 確認外港及氹仔客運碼頭具備庫餘電量可調撥予純電動船補充，惟僅提供 400V 電壓（直接確證我方「400V 慢充 + 岸基儲能櫃 BESS 升壓快充」架構之必要性）；(2) 列明須遵守 1972 國際避碰規則、第 1/98 及 3/2022 號告示、第 34/2009 號行政法規《海上客運》及船舶安全檢驗；(3) 建議就綠色激勵措施徵詢澳門環境保護局 (DSPA) 及環保與節能基金。',
                thread: `2026年10月27日 下午2:58 澳門特別行政區海事及水務局 (DSMM) 正式回函：
1. 包括電動客船在內的所有於本澳海域航行之船舶，需嚴格遵守1972年國際海上避碰規則、海事活動規章、第1/98號及第3/2022號告示，並通過本局船舶安全檢驗。
2. 船舶擬用於海上客運服務，需遵照第34/2009號行政法規《海上客運》規定營運。
3. 在客運碼頭岸電配套方面，外港客運碼頭及氹仔客運碼頭具有庫餘電量，可調撥供純電動力船舶作有限度電量補充，惟只可提供400V充電電壓。
4. 就綠色激勵措施事宜，建議徵詢澳門環境保護局及環保與節能基金意見。`
            }
        },
        {
            id: 'log-1', cat: 'utility', borderCls: 'border-l-tech-emerald', badgeCls: 'bg-tech-emerald/20 text-tech-emerald',
            date: '21 Oct Walkover → 22 Oct 2026 (2:00 PM Engineering Call)',
            en: {
                status: 'CONCRETE SUBSTATION (≥7.0 mPD) & N×1,500 kVA CONFIRMED',
                agency: 'HK Electric Distribution Planning Department (Mr. Ting & Howard Leung)',
                title: '4. Permanent Concrete Customer Substation (FFL ≥ +7.0 mPD) & Phased 1,500 kVA Multi-Transformer Architecture',
                summary: 'Following the 21 Oct 2026 on-site walkover at Sheung Wan Landing No. 1 (GIS: 22.290175, 114.148746), Senior Engineer Mr. Ting (HK Electric Distribution Planning) called on 22 Oct 2026 at 2:00 PM to confirm three permanent terminal design parameters: (1) Permanent supply requires a Concrete Customer Substation building (with statutory PD & FSD submissions) rather than a stainless-steel pillar; (2) Standard HKE transformer unit size is 1,500 kVA (~1.5 MVA max per unit), so our 3.5 MW+ MCS hub will bank multiple 1,500 kVA transformers (scaling from 1×1,500 kVA + BESS in Stage 1 to 3×1,500 kVA [4.5 MVA] in Stage 2, with civil bays reserved for 6×1,500 kVA [9.0 MVA] by 2050); and (3) While existing seawall grade at Landing No. 1 is ~3.8 mPD, the substation Finished Floor Level (FFL) must be elevated to ≥ +7.0 mPD for flood protection.',
                thread: `22 Oct 2026 (2:00 PM Technical Call with Mr. Ting, HK Electric Distribution Planning):
- Permanent Concrete Customer Substation: Because the EV ferry charging hub is a permanent supply on government-allocated terminal land, a reinforced concrete Customer Substation building (with PD & FSD statutory approvals) is required instead of a container pillar.
- Standard 1,500 kVA Transformer Units: HKE's unit transformer capacity is 1,500 kVA (~1.5 MW max single unit). To supply 3.5 MW+ MCS charging and scale toward 2050, the substation will house multiple 1,500 kVA transformers (Stage 1: 1×1,500 kVA + 1.5 MWh BESS -> Stage 2: 3×1,500 kVA [4.5 MVA] -> Stage 3: 6×1,500 kVA [9.0 MVA]).
- Storm-Surge Flood Elevation (≥ +7.0 mPD): Existing site grade at Sheung Wan Landing No. 1 is ~3.8 mPD. To prevent flooding, the Customer Substation floor level must be built at ≥ +7.0 mPD (+3.2m elevated upper deck).`
            },
            tc: {
                status: '已確認混凝土變電站 (≥7.0 mPD) 及 N×1,500 kVA 架構',
                agency: '香港電燈 (HK Electric) 配電規劃部（丁工程師 Mr. Ting 及 Howard Leung）',
                title: '4. 永久性混凝土客戶變電站 (防洪標高 ≥ +7.0 mPD) 及 N×1,500 kVA 變壓器分階段擴容方案',
                summary: '繼 2026年10月21日 上環一號梯台 (22.290175, 114.148746) 現場勘察後，港燈配電規劃部丁工程師 (Mr. Ting) 於 10月22日 下午2:00 致電確認三項永久碼頭工程指標：(1) 須於新碼頭內興建「混凝土結構客戶變電站」(連同規劃署 PD 及消防處 FSD 審批)；(2) 港燈標準變壓器單機容量為 1,500 kVA (~1.5 MVA)，因此 3.5 MW+ 超級快充樞紐將採用多台 1,500 kVA 變壓器並聯架構（1台 → 3台 [4.5 MVA] → 6台 [9.0 MVA]）；(3) 變電站地台標高 (FFL) 必須設於 ≥ +7.0 mPD（即設於碼頭二樓高架層）。',
                thread: `2026年10月22日（下午2:00 港燈配電規劃部丁工程師 Mr. Ting 電話技術確認）：
- 永久混凝土客戶變電站：永久渡輪充電站需採用混凝土建築結構之客戶變電站 (Customer Substation)，並辦理 PD 及 FSD 法定審批。
- 1,500 kVA 標準變壓器組合：單台變壓器上限為 1,500 kVA；我方採用「多台 1,500 kVA 變壓器 + 1.5 MWh 儲能緩衝」分階段擴展（1台 → 3台 [4.5 MVA] → 6台 [9.0 MVA]）。
- 防洪地台標高 (≥ +7.0 mPD)：一號梯台現有海堤地面約 +3.8 mPD，變電站樓面須抬升至 ≥ +7.0 mPD。`
            }
        },
        {
            id: 'log-11', cat: 'utility', borderCls: 'border-l-tech-cyan', badgeCls: 'bg-tech-cyan/20 text-tech-cyan',
            date: '21 Oct → 22 Oct 2026 (1:11 PM Official Routing)',
            en: {
                status: 'JURISDICTION ROUTED TO LANDSD & EEB',
                agency: 'Lands Dept (DLO/HKW&S), Environment & Ecology Bureau (EEB) & CEDD Port Works (Rosita So)',
                title: '5. Sheung Wan Greenfield 22 kV Terminal Land Allocation & Policy Support Routing',
                summary: 'Following our 21 Oct 2026 multi-bureau submission, Engineer Rosita So (CEDD Port Works Division) replied on 22 Oct 2026 at 1:11 PM clarifying that CEDD is only responsible for pier sub-structure maintenance, and officially directed the waterfront parcel Short Term Tenancy (STT) / land allocation to the Lands Department (District Lands Office / Hong Kong West & South) and policy support recognition to the Environment and Ecology Bureau (EEB).'
            },
            tc: {
                status: '已確立由地政總署及環境局主導審批',
                agency: '地政總署 (港島西及南區)、環境及生態局 (EEB) 及土木工程拓展署 (蘇慧嫻工程師)',
                title: '5. 上環海濱 22 kV 純電碼頭短期租約 (STT) 用地配置及政策支持分工確認',
                summary: '繼 2026年10月21日 提交跨部門建議書後，土木工程拓展署海港工程部蘇慧嫻工程師 (Rosita So) 於 10月22日 下午1:11 正式回覆，闡明土木署僅負責現有碼頭下部結構維修，並明確指引：海濱用地配置由地政總署（港島西及南區地政處）處理，而綠色運輸政策支持則由環境及生態局 (EEB) 審批。'
            }
        },
        {
            id: 'log-2', cat: 'grant', borderCls: 'border-l-tech-emerald', badgeCls: 'bg-tech-emerald/20 text-tech-emerald',
            date: '16 Oct 2026',
            en: {
                status: 'REGISTERED ON NOTIFICATION LIST',
                agency: 'Green Tech Fund Secretariat / Environment and Ecology Bureau (EEB)',
                title: '6. Green Tech Fund (GTF) Alignment: Zero-Emission Hydrofoil & Shore-Side Charging Infrastructure',
                summary: 'Submitted formal inquiry detailing BAYWING’s 168,000 tonnes/year CO₂ reduction, 80% drag reduction (slashing energy cost from HK$ 175.50/NM down to HK$ 38.22/NM), and high-voltage shore-side integration. The GTF Secretariat confirmed eligibility for local companies and registered Aero-Marine Systems Limited for the Q4 2026 GTF application round and applicant webinar.'
            },
            tc: {
                status: '已列入官方通知名單',
                agency: '環境及生態局 — 低碳綠色科研基金秘書處 (GTF)',
                title: '6. 低碳綠色科研基金 (GTF) 對接：零排放水翼船及岸電快充基建',
                summary: '已提交正式申請查詢，詳述 BAYWING 每年減碳 168,000 公噸、減少 80% 水阻力（每海里能源開支由 HK$ 175.50 降至 HK$ 38.22）及岸電電網整合方案。基金秘書處已確認本地企業申請資格，並將本公司列入 2026 年第四季新一輪申請及簡介會通知名單。'
            }
        },
        {
            id: 'log-3', cat: 'utility', borderCls: 'border-l-sky-400', badgeCls: 'bg-sky-500/20 text-sky-400',
            date: '16 Oct 2026',
            en: {
                status: 'FACILITY ENGINEERING ROUTING',
                agency: 'Airport Authority Hong Kong (AAHK) — Landside / Intermodal Connectivity',
                title: '7. HKIA SkyPier Terminal: 3.8 MW Megawatt Charging System (MCS) Airside Feeder Infrastructure',
                summary: 'AAHK Intermodal Connectivity confirmed that SkyPier berthing facilities are managed directly by Airport Authority Hong Kong while vessels are operated by ferry operators. Aero-Marine Systems requested routing of the 3.8 MW MCS shore-side electrical brief to AAHK’s Engineering & Technology Division to support customs-free APM airside transfers from Shenzhen and Macau.'
            },
            tc: {
                status: '工程部門轉介對接中',
                agency: '香港機場管理局 (AAHK) — 陸路交通及多式聯運部',
                title: '7. 香港國際機場海天碼頭 (SkyPier)：3.8 MW 兆瓦級充電系統 (MCS) 禁區聯運基建',
                summary: '機管局多式聯運部確認海天碼頭泊位設施由香港機場管理局直接管理。本公司已請求將 3.8 MW MCS 岸電改造方案轉介至機管局工程及科技部審視，支援深圳及澳門旅客經機場無人駕駛列車 (APM) 禁區無縫轉機。'
            }
        },
        {
            id: 'log-4', cat: 'grant', borderCls: 'border-l-tech-amber', badgeCls: 'bg-tech-amber/20 text-tech-amber',
            date: '16 Oct 2026',
            en: {
                status: '1:1 MATCHING CONSULTATION FILED',
                agency: 'Innovation and Technology Commission (ITC) — ESS Secretariat',
                title: '8. ITC Enterprise Support Scheme (ESS): HK$ 20.0M Co-Matching for Phase 2 BAYWING-D2 Pilot',
                summary: 'Requested preliminary consultation to align HK$ 10.0M in private seed/angel capitalization with HK$ 10.0M in ESS 1:1 matching grant funds (HK$ 20.0M total) to execute Phase 2 R&D: hardening the triple-redundant 100Hz C++/RTOS flight controller and validating the 15-meter, 25–40 passenger BAYWING-D2.'
            },
            tc: {
                status: '已提交 1:1 配對基金諮詢',
                agency: '創新科技署 (ITC) — 企業支援計劃 (ESS) 秘書處',
                title: '8. 創新科技署企業支援計劃 (ESS)：HK$ 2,000萬等額配對資助第二階段 BAYWING-D2 先導船',
                summary: '已提交初步諮詢，規劃以 HK$ 1,000萬私募種子/天使資金配對 HK$ 1,000萬 ESS 1:1 政府資助（合共 HK$ 2,000萬），執行第二階段研發：強化三冗餘 100Hz C++/RTOS 載人級飛控電腦及驗證 15 米長、25–40 座 BAYWING-D2。'
            }
        },
        {
            id: 'log-5', cat: 'utility', borderCls: 'border-l-zinc-400', badgeCls: 'bg-zinc-800 text-zinc-200',
            date: '16 Oct 2026',
            en: {
                status: 'RECEIPT ACKNOWLEDGED',
                agency: 'Electrical and Mechanical Services Department (EMSD)',
                title: '9. EMSD High-Voltage Shore-Side Charging & BESS Safety Filing',
                summary: 'Official receipt acknowledged by the Electrical and Mechanical Services Department regarding electrical safety and regulatory compliance for our shore-side charging switchgear, unidirectional reverse-power protection, and 800V–1,000V DC marine high-voltage charging interface.'
            },
            tc: {
                status: '機電署已確認收悉存檔',
                agency: '機電工程署 (EMSD)',
                title: '9. 機電工程署高壓岸電快充及儲能電池庫安全合規申報',
                summary: '機電工程署已正式確認收悉我方關於岸上配電保護裝置、單向防逆流保護及 800V–1,000V DC 船用高壓充電接口之電力安全合規申報。'
            }
        },
        {
            id: 'log-6', cat: 'grant', borderCls: 'border-l-tech-emerald', badgeCls: 'bg-tech-emerald/20 text-tech-emerald',
            date: '16 Oct 2026',
            en: {
                status: 'HK$ 1.45M ITF RTH RECRUITMENT',
                agency: 'HKUST Robotics Institute & PolyU Mechanical Engineering',
                title: '10. Academic R&D Collaboration & Research Talent Hub (HK$ 1,450,000 Grant Allocation)',
                summary: 'Initiated recruitment and joint research outreach to hire two full-time Control Systems / Marine Mechatronics Engineers (BSc/MSc/PhD graduates) 100% funded under our HK$ 1.45M ITF Research Talent Hub allocation, focusing on 100Hz C++/RTOS loops on STM32H7/Jetson hardware, 6-DOF MATLAB/ROS2 digital twins, and Tolo Harbour sub-scale sea trials.'
            },
            tc: {
                status: 'HK$ 145萬研究人才庫招聘啟動',
                agency: '香港科技大學機器人研究所 (HKUST) 及香港理工大學機械工程學系 (PolyU)',
                title: '10. 大學科研合作及研究人才庫招聘（HK$ 1,450,000 資助額度）',
                summary: '已向科大及理大發起聯合研發及人才招聘，利用創新科技署「研究人才庫」(ITF RTH) HK$ 145萬全額資助聘請 2 名全職飛控系統及船舶機電工程師，專責 STM32H7/Jetson 100Hz C++/RTOS 控制迴路、6-DOF 數字孿生建模及吐露港 D1 海試。'
            }
        },
        {
            id: 'log-7', cat: 'utility', borderCls: 'border-l-tech-cyan', badgeCls: 'bg-tech-cyan/20 text-tech-cyan',
            date: '16 Oct → 22 Oct 2026',
            en: {
                status: 'SUB-STRUCTURE SCOPE CLARIFIED',
                agency: 'Civil Engineering and Development Department (CEDD) — Port Works Division',
                title: '11. CEDD Port Works: Seawall Sub-Structure Maintenance vs. LandsD/EEB Greenfield Allocation',
                summary: 'On 22 Oct 2026, CEDD Port Works confirmed they handle pier sub-structure maintenance only, clearing the path for our direct Short Term Tenancy (STT) / Cap. 127 marine deck application with the Lands Department and policy backing from EEB.'
            },
            tc: {
                status: '已釐清海堤維修與撥地權責',
                agency: '土木工程拓展署 (CEDD) — 海港工程部',
                title: '11. 土木工程拓展署海港工程：確認碼頭下部結構維護職能並轉介地政總署及環境局',
                summary: '2026年10月22日獲土木工程拓展署海港工程部正式回覆，釐清該署僅負責碼頭下部結構維護，確立新純電碼頭用地直接由地政總署及環境及生態局審批。'
            }
        },
        {
            id: 'log-8', cat: 'utility', borderCls: 'border-l-tech-amber', badgeCls: 'bg-tech-amber/20 text-tech-amber',
            date: '16 Oct → 28 Oct 2026',
            en: {
                status: 'HKE ↔ CLP INTER-UTILITY ENGINEERING BRIDGE',
                agency: 'HK Electric Distribution Planning & CLP Marine eMobility',
                title: '12. Cross-Harbour Utility Bridge: Connecting CLP Marine eMobility with HK Electric Distribution Planning',
                summary: 'Following the 28 Oct 2026 Teams call with CLP Marine eMobility, formally connected CLP’s engineering team with HK Electric’s Distribution Planning & EV team so both utilities can exchange notes on our Sheung Wan 22 kV Flagship Hub and future CLP 11 kV / Tsing Yi maintenance depot nodes.'
            },
            tc: {
                status: '已建立港燈與中電跨海工程對接橋樑',
                agency: '香港電燈配電規劃部 及 中華電力 Marine eMobility',
                title: '12. 兩電跨海技術聯動：引薦中電 Marine eMobility 與港燈配電規劃團隊直接對接',
                summary: '繼 2026年10月28日 與中電完成視像會議後，正式引薦中電與港燈配電規劃團隊直接交流，分享港島上環 22 kV 水上機場樞紐之技術架構。'
            }
        },
        {
            id: 'log-9', cat: 'class', borderCls: 'border-l-purple-400', badgeCls: 'bg-purple-500/20 text-purple-400',
            date: '16 Oct 2026',
            en: {
                status: 'STRATEGIC BOARD UPDATE',
                agency: 'Hong Kong Maritime and Port Board (HKMPB) Secretariat',
                title: '13. HKMPB Strategic Briefing: 78% OPEX Reduction (HK$ 38.22/NM) & Sovereign HK IP Export',
                summary: 'Presented BAYWING’s 10-year fleet modernization roadmap to the HKMPB Secretariat, highlighting the 78% energy cost reduction (from HK$ 175.50/NM marine diesel down to HK$ 38.22/NM electric hydrofoil), local Hong Kong 100Hz flight-control IP paired with GBA composite manufacturing, and East Asia green maritime leadership.'
            },
            tc: {
                status: '已提交海運港口局策略簡報',
                agency: '香港海運港口局 (HKMPB) 秘書處',
                title: '13. 香港海運港口局策略簡報：削減 78% 能源開支 (HK$ 38.22/海里) 及香港自主 IP 出口',
                summary: '已向香港海運港口局秘書處提交 BAYWING 十年船隊現代化藍圖，重點展示削減 78% 燃料成本（由傳統柴油每海里 HK$ 175.50 降至純電水翼船 HK$ 38.22）及香港自主 IP 出口潛力。'
            }
        },
        {
            id: 'log-10', cat: 'class', borderCls: 'border-l-purple-400', badgeCls: 'bg-purple-500/20 text-purple-400',
            date: '16 Oct 2026',
            en: {
                status: 'CLASSIFICATION ADVISORY FILED',
                agency: 'DNV Hong Kong Maritime Advisory Team',
                title: '14. DNV High-Speed Craft (HSC) Classification: 800V–1,000V LFP Containment & 100Hz RTOS Certification',
                summary: 'Requested preliminary classification advisory consultation covering Phase 1/2 engineering parameters (funded under our HK$ 1.50M D2 certification budget): marine LFP battery containment, dual-redundant electric pod propulsion, 100Hz triple-redundant RTOS software certification, and dockside MCS charging rules.'
            },
            tc: {
                status: '已提交船級社審圖技術諮詢',
                agency: 'DNV 挪威船級社（香港海事顧問團隊）',
                title: '14. DNV 高速船 (HSC) 入級規範：800V–1,000V LFP 電池艙安全及 100Hz RTOS 飛控認證',
                summary: '已提交初步入級技術諮詢（納入 D2 項目 HK$ 150萬認證預算）：涵蓋船用磷酸鐵鋰電池熱失控隔離、雙冗餘吊艙電力推進、100Hz 三冗餘 RTOS 軟件安全認證及碼頭兆瓦級快充規範。'
            }
        }
    ]
};
