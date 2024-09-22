/** @type {import('./$types').PageServerLoad} */

type Playmat = {
  Name: string;
  Art: string;
  Stored: string;
}
export async function load() {

  const playmats: Playmat[] =[
    {
      "Name": "MH2 - Svyelun God of the Sea",
      "Art": "https://drive.google.com/file/d/1GJA3fR6oB5V7q6xQ32eRI17ZKe2vGDlU/",
      "Stored": "01x01"
    },
    {
      "Name": "MH2 - Kaldra Compleat",
      "Art": "https://drive.google.com/file/d/1TSmVaPbPpqLwAkQnv1-U3473aQjWfHI2/",
      "Stored": "01x02"
    },
    {
      "Name": "MH2 - Asmoranomardicadaistinaculdacar",
      "Art": "https://drive.google.com/file/d/1FBXUwjp--5DSIYz7YgPiAMWb3E2pprID/",
      "Stored": "01x03"
    },
    {
      "Name": "MH2 - Profane Tutor",
      "Art": "https://drive.google.com/file/d/15Nd7ZkJcpJNApfMt-d6iXGPagP0E_9GU/",
      "Stored": "01x04"
    },
    {
      "Name": "MH2 - Chatterfang, Squirrel General",
      "Art": "https://drive.google.com/file/d/1t7k4O9BnZbojqNPBtBhWl4-CLE3FIWzV/",
      "Stored": "01x05"
    },
    {
      "Name": "MH2 - Timeless Dragon",
      "Art": "https://drive.google.com/file/d/1vDpYeYbqaS7Gx019Y4TaEGzLnoIN45k4/",
      "Stored": "01x06"
    },
    {
      "Name": "AFR - Galea, Kindler of Hope",
      "Art": "https://drive.google.com/file/d/1aXLEgvwphkyHd-jeaDdSt7PYGNLQCmte/",
      "Stored": "02x01"
    },
    {
      "Name": "AFR - The Party Fighting Blue Dragon",
      "Art": "https://drive.google.com/file/d/1iiJ2eTv8OhTyor7-gqca2sl4q82w7mHV/",
      "Stored": "02x02"
    },
    {
      "Name": "AFR - Gelatinous Cube",
      "Art": "https://drive.google.com/file/d/186blz2d80gxPpanyZHlV2N3ecAmaXyL7/",
      "Stored": "02x03"
    },
    {
      "Name": "AFR - Demilich",
      "Art": "https://drive.google.com/file/d/1wQLZ8-j9oqTKmdxohlWQHQYkfM4l3YK8/",
      "Stored": "02x04"
    },
    {
      "Name": "AFR - Adult Gold Dragon",
      "Art": "https://drive.google.com/file/d/112wJHibSkMPXx-_kL7-hDREopyYO71M_/",
      "Stored": "02x05"
    },
    {
      "Name": "AFC - Sefris of the Hidden Way",
      "Art": "https://drive.google.com/file/d/1mTdsAsa6vhfIlQpG9agLZwZE7BlCQPES/",
      "Stored": "03x01"
    },
    {
      "Name": "AFC - Vrondiss, Rage of Ancients",
      "Art": "https://drive.google.com/file/d/1jacRdjv5tryoBB_ug92ogohlCuWmA4qg/",
      "Stored": "03x02"
    },
    {
      "Name": "AFC - Prosper, Tome-Bound",
      "Art": "https://drive.google.com/file/d/1OUJ5rFdN68id79BpcfxeJQ9QNh3lkj1o/",
      "Stored": "03x03"
    },
    {
      "Name": "CMR - Liesa, Shroud of Dusk",
      "Art": "https://drive.google.com/file/d/1BLRiple4ySfpQc_xT-ZYm7MmLFzNFnY8/",
      "Stored": "04x01"
    },
    {
      "Name": "CMR - Rograkh, Son of Rohgahh",
      "Art": "https://drive.google.com/file/d/1qTeztZOKt1onOLsHpcQBIXUCb53hllsF/",
      "Stored": "04x02"
    },
    {
      "Name": "CMR - Rebbec, Architect of Ascension",
      "Art": "https://drive.google.com/file/d/1MiJHu6TSfxIao6zq6jVNg28Vj4r6Clw0/",
      "Stored": "04x03"
    },
    {
      "Name": "CMR - Archelos, Lagoon Mystic",
      "Art": "https://drive.google.com/file/d/1Ywyk8fMnLlj4OaaWB_cZftmmXOKafVZF/",
      "Stored": "04x04"
    },
    {
      "Name": "CMR - Jeska, Thrice Reborn",
      "Art": "https://drive.google.com/file/d/13XmLnB7l3Q_RqvTuLBS-AhXQexHu9F4f/",
      "Stored": "04x05"
    },
    {
      "Name": "CMR - The Prismatic Piper",
      "Art": "https://drive.google.com/file/d/1394kvQajReOGchPfAA0qm9FmOf2aQK2-/",
      "Stored": "04x06"
    },
    {
      "Name": "Mystical Archive - Mizzixs Mastery",
      "Art": "https://drive.google.com/file/d/1_dpzCjeHISbfBYAnOh91_OBa_-NW3QmZ/",
      "Stored": "05x01"
    },
    {
      "Name": "Mystical Archive - Tezzerets Gambit",
      "Art": "https://drive.google.com/file/d/1Eas0PN2gYQH7g-2Y0oSeicilqTk0RPOy/",
      "Stored": "05x02"
    },
    {
      "Name": "Mystical Archive - Agonizing Remorse",
      "Art": "https://drive.google.com/file/d/1i0DZLo8ouQ5IMT7Ecl7HZghA9Xvj75lJ/",
      "Stored": "05x03"
    },
    {
      "Name": "Secret Lair - Ryu and Ken",
      "Art": "https://drive.google.com/file/d/1NkWLlAYbxINH91jUUxgWpH11rGe2MMo8/",
      "Stored": "06x01"
    },
    {
      "Name": "Secret Lair - Glissa Sunseeker",
      "Art": "https://drive.google.com/file/d/1Rr01XjU9ieugjYvpoB-qOw9V6QZT9ndE/",
      "Stored": "06x02"
    },
    {
      "Name": "Secret Lair - lil walker Tamiyo",
      "Art": "https://drive.google.com/file/d/1LRroLeeCSeW5f6pMU-Eckr5_SN32SKQc/",
      "Stored": "06x03"
    },
    {
      "Name": "Secret Lair - lil walkers panorama",
      "Art": "https://drive.google.com/file/d/1d5qrf5iHlG3zeTirPeHDn9zWlTXJn9vr/",
      "Stored": "06x04"
    },
    {
      "Name": "Secret Lair - Mikaeus, the Unhallowed",
      "Art": "https://drive.google.com/file/d/1SjaE-HJd2dPIBhmnIh3FhbUYLn3ByT3b/",
      "Stored": "06x05"
    },
    {
      "Name": "Secret Lair - Sakura Tribe Elder",
      "Art": "https://drive.google.com/file/d/1xEnwK6exBQRasyFNVKeZtnWvAJrdNdyT/",
      "Stored": "06x06"
    },
    {
      "Name": "Secret Lair - Golgari Signet",
      "Art": "https://drive.google.com/file/d/1Kp7AwV33lQMXl1yV-YPpcnDbAxofxjSC/",
      "Stored": "06x07"
    },
    {
      "Name": "Secret Lair - Arcane Signet",
      "Art": "https://drive.google.com/file/d/1MWBOzuJVt4m-T4OsWf0KMUYHhv9Bva7Q/",
      "Stored": "06x08"
    },
    {
      "Name": "Secret Lair - Eldraine Wonderland",
      "Art": "https://drive.google.com/file/d/1u6bzfloxgHGmidxg7_vaaAdHLED9rv8q/",
      "Stored": "06x09"
    },
    {
      "Name": "Secret Lair - Blanka and E Honda",
      "Art": "https://drive.google.com/file/d/1obuG9ZIrK3XrsTw24g0quLOPR-cCMvU8/",
      "Stored": "06x10"
    },
    {
      "Name": "Secret Lair - Zangief and Dhalsim",
      "Art": "https://drive.google.com/file/d/1DXAZWoL0yplHoR93LucjNV4GZD8pWZBR/",
      "Stored": "06x11"
    },
    {
      "Name": "Nils Hamm Artist Series - Sword of Truth and Justice",
      "Art": "https://drive.google.com/file/d/1e6gajJ3vwGBpkL8tlpTIcPWbCpIrAukG/",
      "Stored": "07x01"
    },
    {
      "Name": "Nils Hamm Artist Series - Tireless Tracker",
      "Art": "https://drive.google.com/file/d/1UmbMou8lATGC7zofoZKNPnntr79QJ5PZ/",
      "Stored": "07x02"
    },
    {
      "Name": "Nils Hamm Artist Series - Deepglow Skate",
      "Art": "https://drive.google.com/file/d/1grNW1sfA35vIRPR7mGLc1XJXyo0Cl75C/",
      "Stored": "07x03"
    },
    {
      "Name": "THB - Purphoros, Bronze-Blooded",
      "Art": "https://drive.google.com/file/d/1D3WKKb2dUzjQ-N--TYqTzQQwGMHpVz2f/",
      "Stored": "08x01"
    },
    {
      "Name": "THB - Purphoros, Bronze-Blooded",
      "Art": "https://drive.google.com/file/d/1D3WKKb2dUzjQ-N--TYqTzQQwGMHpVz2f/",
      "Stored": "08x02"
    },
    {
      "Name": "THB - Tymaret, Chosen From Death",
      "Art": "https://drive.google.com/file/d/1FG0XcJLphAbI7eOXzmY0YwBlUvpiJ1gC/",
      "Stored": "08x03"
    },
    {
      "Name": "THB - Tymaret, Chosen From Death",
      "Art": "https://drive.google.com/file/d/1FG0XcJLphAbI7eOXzmY0YwBlUvpiJ1gC/",
      "Stored": "08x04"
    },
    {
      "Name": "THB - Celestial Land Forest",
      "Art": "https://drive.google.com/file/d/1sE9ZGomQkhKEdUPxRr3rY5Yfppr6k1Vv/",
      "Stored": "08x05"
    },
    {
      "Name": "THB - Celestial Land Forest",
      "Art": "https://drive.google.com/file/d/1sE9ZGomQkhKEdUPxRr3rY5Yfppr6k1Vv/",
      "Stored": "08x06"
    },
    {
      "Name": "THB - Celestial Land Mountain",
      "Art": "https://drive.google.com/file/d/1qzoekdXFmT6RXjTveMQ7Nl9I3n7oYBdL/",
      "Stored": "08x07"
    },
    {
      "Name": "THB - Celestial Land Swamp",
      "Art": "https://drive.google.com/file/d/1zXLRENpYPs30GTokDYvPjZh4npk8vxxX/",
      "Stored": "08x08"
    },
    {
      "Name": "THB - Celestial Land Swamp",
      "Art": "https://drive.google.com/file/d/1zXLRENpYPs30GTokDYvPjZh4npk8vxxX/",
      "Stored": "08x09"
    },
    {
      "Name": "THB - Celestial Land Island",
      "Art": "https://drive.google.com/file/d/1oRtx7IPmo46q1_LioICQsRnYIOAsVQvQ/",
      "Stored": "08x10"
    },
    {
      "Name": "THB - Celestial Land Island",
      "Art": "https://drive.google.com/file/d/1oRtx7IPmo46q1_LioICQsRnYIOAsVQvQ/",
      "Stored": "08x11"
    },
    {
      "Name": "THB - Celestial Land Plains",
      "Art": "https://drive.google.com/file/d/1MfAbhwujTn5gXWAwfohxkf3FEJwCcFNS/",
      "Stored": "08x12"
    },
    {
      "Name": "THB - Nyx Lotus",
      "Art": "https://drive.google.com/file/d/1sEL2efo110FHDprAGU9gG9pQGPnT_GHC/",
      "Stored": "08x13"
    },
    {
      "Name": "THB - Nyx Lotus",
      "Art": "https://drive.google.com/file/d/1sEL2efo110FHDprAGU9gG9pQGPnT_GHC/",
      "Stored": "08x14"
    },
    {
      "Name": "NEO - The Wanderer",
      "Art": "https://drive.google.com/file/d/1wI_ilPEbpviQk7W5cpX4moUBHRwjprzw/",
      "Stored": "09x01"
    },
    {
      "Name": "NEO - Satoru Umezawa",
      "Art": "https://drive.google.com/file/d/1Ngj9BoiNRAYXt-ojhM1kIPlQB0Ae2yh_/",
      "Stored": "09x02"
    },
    {
      "Name": "NEO - Kaito Shizuki",
      "Art": "https://drive.google.com/file/d/1c3H9xtTOONL4ZEQHIHslNIrYNkBR_-73/",
      "Stored": "09x03"
    },
    {
      "Name": "NEO - Tezzeret, Betrayer of Flesh",
      "Art": "https://drive.google.com/file/d/1vC4phWRQaT1SNvwC4AptnQ0cUAcvi_AZ/",
      "Stored": "09x04"
    },
    {
      "Name": "NEO - Chishiro, the Shattered Blade",
      "Art": "https://drive.google.com/file/d/1RUhmZJUyrFrp_NmxlyJWJGxMfrHr_iv8/",
      "Stored": "09x05"
    },
    {
      "Name": "NEO - Kotori, Pilot Prodigy",
      "Art": "https://drive.google.com/file/d/1Yzh8_E8lMefdIGf5Gchn6WpQc-bM0iC4/",
      "Stored": "09x06"
    },
    {
      "Name": "NEO - Jin-Gitaxias, Progress Tyrant",
      "Art": "https://drive.google.com/file/d/1d1fdyjTKVOr-csgZT-X1jEyqSnlgXC9P/",
      "Stored": "09x07"
    },
    {
      "Name": "ZNR - Murkwater Pathway",
      "Art": "https://drive.google.com/file/d/1d-Y3juQgCppy29r_2vpQA6nwnQ7EiLdE/",
      "Stored": "10x01"
    },
    {
      "Name": "ZNR - Cragcrown Pathway",
      "Art": "https://drive.google.com/file/d/1VLEvPKsN0jBt8I5pKCdRIZ4Yyvkmkm_y/",
      "Stored": "10x02"
    },
    {
      "Name": "ZNR - Riverglide Pathway",
      "Art": "https://drive.google.com/file/d/1hRXT3kRTBUwD59PpSbu8WaUWULrKA7Ma/",
      "Stored": "10x03"
    },
    {
      "Name": "ZNR - Clearwater Pathway",
      "Art": "https://drive.google.com/file/d/1PEnOaJq942BLKQ4cG7vsv4h4n4gfLUan/",
      "Stored": "10x04"
    },
    {
      "Name": "ZNR - Branchloft Pathway",
      "Art": "https://drive.google.com/file/d/18a718HbwPwmXq-cEL41qNgQy-zwCPwCv/",
      "Stored": "10x05"
    },
    {
      "Name": "ZNR - Boulderloft Pathway",
      "Art": "https://drive.google.com/file/d/1hRLMyTZfkBl-MXsqOOkOZif3bsdBv2Lf/",
      "Stored": "10x06"
    },
    {
      "Name": "ZNR - Lavaglide Pathway",
      "Art": "https://drive.google.com/file/d/1UAjmmmVLKB-1SwHRBkEznpDO1H_PxQve/",
      "Stored": "10x07"
    },
    {
      "Name": "ZNR - Pillarverge Pathway",
      "Art": "https://drive.google.com/file/d/1BFPca0bBGSi82sc3jZ_LY7QYI7aldJa2/",
      "Stored": "10x08"
    },
    {
      "Name": "ZNR - Pillarverge Pathway",
      "Art": "https://drive.google.com/file/d/1BFPca0bBGSi82sc3jZ_LY7QYI7aldJa2/",
      "Stored": "10x09"
    },
    {
      "Name": "ZNR - Timbercrown Pathway",
      "Art": "https://drive.google.com/file/d/1_xP3xY5HCGWCK7GdFWd907df0QNzmwkU/",
      "Stored": "10x10"
    },
    {
      "Name": "ZNR - Anowon, the Ruin Thief",
      "Art": "https://drive.google.com/file/d/1Kv0N5CwA0LSb2tMXiO5H6zjsr3tIvpt1/",
      "Stored": "10x11"
    },
    {
      "Name": "ZNR - Anowon, the Ruin Thief",
      "Art": "https://drive.google.com/file/d/1Kv0N5CwA0LSb2tMXiO5H6zjsr3tIvpt1/",
      "Stored": "10x12"
    },
    {
      "Name": "ZNR - Obuun, Mul Daya Ancestor",
      "Art": "https://drive.google.com/file/d/1A8Z8ADzFgC5xBK_Vg4U0oivzXSxVDbzX/",
      "Stored": "10x13"
    },
    {
      "Name": "KHM - Vorinclex, Monstrous Raider",
      "Art": "https://drive.google.com/file/d/11onfiQ9IwgPUyLUWx32YuId1eO-Hyp4Q/",
      "Stored": "11x01"
    },
    {
      "Name": "KHM - Lathril, Blade of the Elves",
      "Art": "https://drive.google.com/file/d/1Rl1W9FdQD1wC5AKtIBfUQ6zUwmc_1ll0/",
      "Stored": "11x02"
    },
    {
      "Name": "KHM - Valki, God of Lies",
      "Art": "https://drive.google.com/file/d/1z7vvMgLx9Upl7HfIHbsXkJJYw0ou6E8-/",
      "Stored": "11x03"
    },
    {
      "Name": "KHM - Ranar, the Ever-Watchful",
      "Art": "https://drive.google.com/file/d/1gnuU9CF9KSXsVciKBCTNlQoX4Ezy2rFJ/",
      "Stored": "11x04"
    },
    {
      "Name": "KHM - Planeswalker symbol",
      "Art": "https://drive.google.com/file/d/18djOXp7NChHB2vJSBGvlI6KF5Hd3LekC/",
      "Stored": "11x05"
    },
    {
      "Name": "IKO - Planeswalker Beast",
      "Art": "https://drive.google.com/file/d/1KuBNru6OICLygezJBlBXqy01IkufwSLV/",
      "Stored": "12x01"
    },
    {
      "Name": "IKO - Illuna, Apex of Wishes",
      "Art": "https://drive.google.com/file/d/1JRVnUyytfB_D1WDwzJ_LdCgxwWSbQ0JO/",
      "Stored": "12x02"
    },
    {
      "Name": "IKO - Go for Blood",
      "Art": "https://drive.google.com/file/d/1WL0p5fqo93LTRDlzkhjDv36zwBV0Z1ZD,12x03",
      "Stored": ""
    },
    {
      "Name": "IKO - Luminous Broodmoth",
      "Art": "https://drive.google.com/file/d/1gk1jq17esYVftKoTPAtMwBFLXzspnY4N/",
      "Stored": "12x04"
    },
    {
      "Name": "IKO - Easy Prey",
      "Art": "https://drive.google.com/file/d/1lbA8otrpF47-tqpI5uecz0e1BIZc1hjL/",
      "Stored": "12x05"
    },
    {
      "Name": "IKO - Kaheera, the Orphanguard",
      "Art": "https://drive.google.com/file/d/1I4LEEFCvZhGZO7FabyH5rxVmn66gjpgb/",
      "Stored": "12x06"
    },
    {
      "Name": "VOW - Sigarda's Summons",
      "Art": "https://drive.google.com/file/d/19LQFxJLdXHqKN1mHsDPr58yD_0CeUyYi/",
      "Stored": "13x01"
    },
    {
      "Name": "VOW - Chandra, Dressed to Kill",
      "Art": "https://drive.google.com/file/d/1Slv34MuZEI14shhTe25mQsppRA4anlXn/",
      "Stored": "13x02"
    },
    {
      "Name": "VOW - Sorin, the Mirthless",
      "Art": "https://drive.google.com/file/d/1ui0oEur-3wzyWXplITp-hTaTDnLc_x0J/",
      "Stored": "13x03"
    },
    {
      "Name": "VOW - Thalia, Guardian of Thraben",
      "Art": "https://drive.google.com/file/d/1blx8bG_tctZZO6mHGXQAwh9FRaeqM18w/",
      "Stored": "13x04"
    },
    {
      "Name": "VOW - Dracula Ensemble",
      "Art": "https://drive.google.com/file/d/1GnabJS1fvSMHH_cM5NDHWOjlT3fi5wDW/",
      "Stored": "13x05"
    },
    {
      "Name": "VOW - Kaya, Geist Hunter",
      "Art": "https://drive.google.com/file/d/1AJtKu3bOkHnzLBhSpHirEmECeZ-8jAvx/",
      "Stored": "13x06"
    },
    {
      "Name": "VOW - Odric, Blood-Cursed",
      "Art": "https://drive.google.com/file/d/1oNADDQPDoHBtfyCA6yLZ2VN9VmGmQE9l/",
      "Stored": "13x07"
    },
    {
      "Name": "VOW - Strefan, Maurer Progenitor",
      "Art": "https://drive.google.com/file/d/18ntIxUpWPi_2-HzaSn36erbs97TcalG6/",
      "Stored": "13x08"
    },
    {
      "Name": "VOW - Olivia",
      "Art": "https://drive.google.com/file/d/11p2AukNEAhexqUpz6V8mgsRR1XZWRLsw/",
      "Stored": "13x09"
    },
    {
      "Name": "VOW - Millicent, Restless Revenant",
      "Art": "https://drive.google.com/file/d/1Yb0BzM7DzngCtLK7R5KB-sH2u-BwjM5_/",
      "Stored": "13x10"
    },
    {
      "Name": "VOW - Ulvenwald Behemoth",
      "Art": "https://drive.google.com/file/d/107x8Q3_M7-7NSM07l4mvKdGGh-ro78a-/",
      "Stored": "13x11"
    },
    {
      "Name": "MID - Can't Stay Away",
      "Art": "https://drive.google.com/file/d/1PJDXFEULyrSjnLRO46GBFE6duEInfMdn/",
      "Stored": "14x01"
    },
    {
      "Name": "MID - Sigarda, Champion of Light",
      "Art": "https://drive.google.com/file/d/1Chx3sC5KTkLXdYcY7ZCUpvFmB8F6Ic20/",
      "Stored": "14x02"
    },
    {
      "Name": "MID - Wrenn and Seven",
      "Art": "https://drive.google.com/file/d/1R1qQqkdb0XXqCIVDNwc5m04Pe35z14ks/",
      "Stored": "14x03"
    },
    {
      "Name": "MID - Leinore, Autumn Sovereign",
      "Art": "https://drive.google.com/file/d/1mxMHjUR6YCB-hg0YBe0NpzCbiv9W3Sew/",
      "Stored": "14x04"
    },
    {
      "Name": "MID - Creeping Inn",
      "Art": "https://drive.google.com/file/d/1ztcllHlCJ8B26c3LUdvCceFXcRhQSPEJ/",
      "Stored": "14x05"
    },
    {
      "Name": "MID - Wilhelt the Rotcleaver",
      "Art": "https://drive.google.com/file/d/1rPrRw7ajIzvk6WL8irvLxtP3U2CsTyga/",
      "Stored": "14x06"
    },
    {
      "Name": "MID - Teferi, Who Slows the Sunset",
      "Art": "https://drive.google.com/file/d/1t4lDcpkV_HaRsX_6TAutxO-DLd0zQ0Pv/",
      "Stored": "14x07"
    },
    {
      "Name": "Grand Prix Paris 2016 - Joraga Auxiliary",
      "Art": "https://drive.google.com/file/d/1fBSn2r81RFNlTCETbQujHUQlULY8coA3/",
      "Stored": "15x01"
    },
    {
      "Name": "2X2 - Exploration",
      "Art": "https://drive.google.com/file/d/1yjA5erl3Il8Yyrlh3TvnFYKp3AHpxDmQ/",
      "Stored": "15x02"
    },
    {
      "Name": "2X2 - Doubling Season",
      "Art": "https://drive.google.com/file/d/1W3_5ehk-xCy1Iqt3KqhJzU5WiVWShgSB/",
      "Stored": "15x03"
    },
    {
      "Name": "2X2 - Doubling Season",
      "Art": "https://drive.google.com/file/d/1W3_5ehk-xCy1Iqt3KqhJzU5WiVWShgSB/",
      "Stored": "15x04"
    },
    {
      "Name": "Commission art - Druid Form Tattoos",
      "Art": "https://drive.google.com/file/d/1A6DGwbA37duGm5dC17W3XVFICsiSSbIA/",
      "Stored": "A1"
    },
    {
      "Name": "Commission art - Mod Appreciation",
      "Art": "https://drive.google.com/file/d/1JTt4bxCBl7YRqFhfat5J0tXetjATk2OL/",
      "Stored": "A2"
    }
  ];

  playmats.forEach((playmat) => {
    // remove trailing slash if present
    if (playmat.Art.endsWith('/')) {
      playmat.Art = playmat.Art.slice(0, -1);
    }
    // extract image id from url
    const imageId = playmat.Art.split('/').pop();
    // generate thumbnail url
    // example: https://drive.google.com/thumbnail?id=0B6wwyazyzml-OGQ3VUo0Z2thdmc&sz=w1000
    playmat.Art = `https://drive.google.com/thumbnail?id=${imageId}&sz=w1000`;
  });
  
  return {
    props: {
      playmats
    }
  };
}