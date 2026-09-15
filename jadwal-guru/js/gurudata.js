// Roster resmi guru — sumber: Jadwal_KBM_2026-2027 (sheet "Jadwal Kuliah Guru 14926"), 46 guru.
// "kode" = kode guru numerik yang dipakai di jadwal master (bukan username login).
const GURU_SEED = [
 
 {
    "id": "g1",
    "nama": "Bapak Drs. K.H Jalal Suyuthi",
    "kode": "1"
  },
  {
    "id": "g2",
    "nama": "Wakhid Nur Salim, S.Pd., M.Pd.",
    "kode": "2"
  },
  {
    "id": "g3",
    "nama": "Alin Rukhana, S.Ag.",
    "kode": "3"
  },
  {
    "id": "g4",
    "nama": "Mangsur Hidayat, S.Ag.",
    "kode": "4"
  },
  {
    "id": "g5",
    "nama": "Dili Dhiyaul haq, S.Pd.",
    "kode": "5"
  },
  {
    "id": "g6",
    "nama": "Dias Galih Bagaskoro, S.Pd.",
    "kode": "6"
  },
  {
    "id": "g7",
    "nama": "M. Rafly Nurul Madani, S.Mat.",
    "kode": "7"
  },
  {
    "id": "g8",
    "nama": "Elqy Nurdiana, S.Psi.",
    "kode": "8"
  },
  {
    "id": "g9",
    "nama": "Imam Haidar Arifin, S.T",
    "kode": "9"
  },
  {
    "id": "g10",
    "nama": "M. Zaim Ibrahim Adzka, S.Kom",
    "kode": "10"
  },
  {
    "id": "g11",
    "nama": "Heri Kiswanto, S.Pd. Si.",
    "kode": "11"
  },
  {
    "id": "g12",
    "nama": "M. Aniq Fuadi, S.E.",
    "kode": "12"
  },
  {
    "id": "g13",
    "nama": "Rinda Rahma Syahidah",
    "kode": "13"
  },
  {
    "id": "g14",
    "nama": "M. Zidan Ghiffari, S.Tr.Kom.",
    "kode": "14"
  },
  {
    "id": "g15",
    "nama": "Maulana Ilham Hamdhallah, S.Kom.",
    "kode": "15"
  },
  {
    "id": "g16",
    "nama": "Arif Arum Pambudi, S.M.",
    "kode": "16"
  },
  {
    "id": "g17",
    "nama": "Vinno Aji Safera Dermawan, S.T.",
    "kode": "17"
  },
  {
    "id": "g18",
    "nama": "Ihda Yumna Muhaimin A'la, S.Pd.",
    "kode": "18"
  },
  {
    "id": "g19",
    "nama": "Yuhanidz Ummu Samhah, S.Sos.",
    "kode": "19"
  },
  {
    "id": "g20",
    "nama": "Ahmad Muhtarom, S.Sos.",
    "kode": "20"
  },
  {
    "id": "g21",
    "nama": "M Mufti Al baikhaqi, S.T.",
    "kode": "21"
  },
  {
    "id": "g22",
    "nama": "Nalta Kafiyazzika, S.M",
    "kode": "22"
  },
  {
    "id": "g23",
    "nama": "Sania Salsabilla, S.",
    "kode": "23"
  },
  {
    "id": "g24",
    "nama": "Muhamad Hamdan Mubarok, S.Mat.",
    "kode": "24"
  },
  {
    "id": "g25",
    "nama": "Lutfiah Hidayatun Nisa, S.Sos.",
    "kode": "25"
  },
  {
    "id": "g26",
    "nama": "Dasilah, M.Hum.",
    "kode": "26"
  },
  {
    "id": "g27",
    "nama": "Ahmad Jazari, S.Pd.",
    "kode": "27"
  },
  {
    "id": "g28",
    "nama": "Aulia Salsabila, S.Si.",
    "kode": "28"
  },
  {
    "id": "g29",
    "nama": "Arina Salma Salsabila, S.Si",
    "kode": "29"
  },
  {
    "id": "g30",
    "nama": "Kun Rifatus Sa'adah, S.Pd.",
    "kode": "30"
  },
  {
    "id": "g31",
    "nama": "Aufa Fikram Muhammad, S.P.",
    "kode": "31"
  },
  {
    "id": "g32",
    "nama": "Inayati Ulya Fidiana, S. Pd. Si.",
    "kode": "32"
  },
  {
    "id": "g33",
    "nama": "Alif Nur Rohmad, S.Si.",
    "kode": "33"
  },
  {
    "id": "g34",
    "nama": "Firly Fitriyani Ramadhani",
    "kode": "34"
  },
  {
    "id": "g35",
    "nama": "Nuru Sabilillah, S.Pd.",
    "kode": "35"
  },
  {
    "id": "g36",
    "nama": "Bagas Putra Pangestu, S.Pd.",
    "kode": "36"
  },
  {
    "id": "g37",
    "nama": "Mohammad Hasan As'adi, S.Sos, M.Si.",
    "kode": "37"
  },
  {
    "id": "g38",
    "nama": "Aqila Fadilahaya, S.Pd.",
    "kode": "38"
  },
  {
    "id": "g39",
    "nama": "Muzaka Aditya Saputra, S.Ag.",
    "kode": "39"
  },
  {
    "id": "g40",
    "nama": "Elva Yulisa, S.Pd.",
    "kode": "40"
  },
  {
    "id": "g41",
    "nama": "Intan Khairunnisa, S.H.",
    "kode": "41"
  },
  {
    "id": "g42",
    "nama": "M Aqil Al Heru, S.Pd.",
    "kode": "42"
  },
  {
    "id": "g43",
    "nama": "Dinda Putri Nur Janah, S.Si.",
    "kode": "43"
  },
  {
    "id": "g44",
    "nama": "Muhammad Shidqi Shofah, S.Pd.",
    "kode": "44"
  },
  {
    "id": "g45",
    "nama": "Syhabul Haq S.S.",
    "kode": "45"
  },
  {
    "id": "g48",
    "nama": "Shofaun Nada, S.H.",
    "kode": "48"
  },
  {
    "id": "g53",
    "nama": "Sri Kumala",
    "kode": "53"
  }
];
