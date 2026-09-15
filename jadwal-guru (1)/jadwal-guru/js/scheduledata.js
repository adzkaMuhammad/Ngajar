// Jadwal resmi hasil impor dari sheet "Test Jadwal 14926" + "Beban Ajar 14926" (455 slot mengajar).
// Dipakai sebagai data awal (seed) — begitu tersimpan ke localStorage, edit berikutnya bersifat lokal per perangkat.
// 3 guru dari roster (Rinda Rahma Syahidah, Muhamad Hamdan Mubarok, Sri Kumala) belum punya alokasi jam di sheet sumber.
const MASTER_SCHEDULE = {
  "g38": [
    {
      "id": "seed1",
      "hari": 0,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-1",
      "ruang": "D1"
    },
    {
      "id": "seed2",
      "hari": 0,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-2",
      "ruang": "D1"
    },
    {
      "id": "seed3",
      "hari": 0,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-3",
      "ruang": "D1"
    },
    {
      "id": "seed22",
      "hari": 0,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-1",
      "ruang": "D1"
    },
    {
      "id": "seed23",
      "hari": 0,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-2",
      "ruang": "D1"
    },
    {
      "id": "seed24",
      "hari": 0,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-3",
      "ruang": "D1"
    },
    {
      "id": "seed201",
      "hari": 2,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-5",
      "ruang": "SU3.02"
    },
    {
      "id": "seed222",
      "hari": 2,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-5",
      "ruang": "SU3.02"
    },
    {
      "id": "seed244",
      "hari": 2,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-6",
      "ruang": "SU3.03"
    },
    {
      "id": "seed265",
      "hari": 2,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-6",
      "ruang": "SU3.03"
    },
    {
      "id": "seed292",
      "hari": 2,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Pendidikan Agama Islam",
      "kelas": "XI IPA 3",
      "ruang": "AHC 5"
    },
    {
      "id": "seed293",
      "hari": 2,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Pendidikan Agama Islam",
      "kelas": "XI IPA 4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed294",
      "hari": 2,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Pendidikan Agama Islam",
      "kelas": "XI IPS 2",
      "ruang": "AHC 5"
    },
    {
      "id": "seed301",
      "hari": 3,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-7",
      "ruang": "SU3.04"
    },
    {
      "id": "seed322",
      "hari": 3,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-7",
      "ruang": "SU3.04"
    },
    {
      "id": "seed340",
      "hari": 3,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-4",
      "ruang": "SU3.01"
    },
    {
      "id": "seed361",
      "hari": 3,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-4",
      "ruang": "SU3.01"
    },
    {
      "id": "seed390",
      "hari": 3,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Pendidikan Agama Islam",
      "kelas": "XI IPA 3",
      "ruang": "AHC 5"
    },
    {
      "id": "seed391",
      "hari": 3,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Pendidikan Agama Islam",
      "kelas": "XI IPA 4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed392",
      "hari": 3,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Pendidikan Agama Islam",
      "kelas": "XI IPS 2",
      "ruang": "AHC 5"
    },
    {
      "id": "seed400",
      "hari": 4,
      "mulai": "09:20",
      "selesai": "10:10",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-8",
      "ruang": "SU3.05"
    },
    {
      "id": "seed421",
      "hari": 4,
      "mulai": "10:10",
      "selesai": "11:00",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-8",
      "ruang": "SU3.05"
    }
  ],
  "g3": [
    {
      "id": "seed4",
      "hari": 0,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed5",
      "hari": 0,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-5",
      "ruang": "AHC 5"
    },
    {
      "id": "seed6",
      "hari": 0,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-6",
      "ruang": "AHC 5"
    },
    {
      "id": "seed7",
      "hari": 0,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-7",
      "ruang": "AHC 5"
    },
    {
      "id": "seed8",
      "hari": 0,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-8",
      "ruang": "AHC 5"
    },
    {
      "id": "seed25",
      "hari": 0,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed26",
      "hari": 0,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-5",
      "ruang": "AHC 5"
    },
    {
      "id": "seed27",
      "hari": 0,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-6",
      "ruang": "AHC 5"
    },
    {
      "id": "seed28",
      "hari": 0,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-7",
      "ruang": "AHC 5"
    },
    {
      "id": "seed29",
      "hari": 0,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-8",
      "ruang": "AHC 5"
    },
    {
      "id": "seed199",
      "hari": 2,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-3",
      "ruang": "H1.06"
    },
    {
      "id": "seed220",
      "hari": 2,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-3",
      "ruang": "H1.06"
    },
    {
      "id": "seed289",
      "hari": 2,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Pendidikan Agama Islam",
      "kelas": "XI IPA 1",
      "ruang": "D1"
    },
    {
      "id": "seed290",
      "hari": 2,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Pendidikan Agama Islam",
      "kelas": "XI IPA 2",
      "ruang": "D1"
    },
    {
      "id": "seed291",
      "hari": 2,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Pendidikan Agama Islam",
      "kelas": "XI IPS 1",
      "ruang": "D1"
    },
    {
      "id": "seed296",
      "hari": 3,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-2",
      "ruang": "H1.05"
    },
    {
      "id": "seed317",
      "hari": 3,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-2",
      "ruang": "H1.05"
    },
    {
      "id": "seed387",
      "hari": 3,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Pendidikan Agama Islam",
      "kelas": "XI IPA 1",
      "ruang": "D1"
    },
    {
      "id": "seed388",
      "hari": 3,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Pendidikan Agama Islam",
      "kelas": "XI IPA 2",
      "ruang": "D1"
    },
    {
      "id": "seed389",
      "hari": 3,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Pendidikan Agama Islam",
      "kelas": "XI IPS 1",
      "ruang": "D1"
    },
    {
      "id": "seed393",
      "hari": 4,
      "mulai": "09:20",
      "selesai": "10:10",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-1",
      "ruang": "H1.02"
    },
    {
      "id": "seed414",
      "hari": 4,
      "mulai": "10:10",
      "selesai": "11:00",
      "mapel": "Tajwid dan Tahsin",
      "kelas": "X-1",
      "ruang": "H1.02"
    }
  ],
  "g12": [
    {
      "id": "seed9",
      "hari": 0,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Matematika Peminatan",
      "kelas": "XI IPA 1",
      "ruang": "H1.02"
    },
    {
      "id": "seed30",
      "hari": 0,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Matematika Peminatan",
      "kelas": "XI IPA 1",
      "ruang": "H1.02"
    },
    {
      "id": "seed57",
      "hari": 0,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Matematika Peminatan",
      "kelas": "XII IPA 1",
      "ruang": "H1.05"
    },
    {
      "id": "seed78",
      "hari": 0,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Matematika Peminatan",
      "kelas": "XII IPA 1",
      "ruang": "H1.05"
    },
    {
      "id": "seed96",
      "hari": 0,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Matematika Peminatan",
      "kelas": "XI IPA 3",
      "ruang": "SU3.03"
    },
    {
      "id": "seed116",
      "hari": 1,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Matematika Peminatan",
      "kelas": "XII IPA 3",
      "ruang": "SU1.02"
    },
    {
      "id": "seed137",
      "hari": 1,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Matematika Peminatan",
      "kelas": "XII IPA 3",
      "ruang": "SU1.02"
    },
    {
      "id": "seed153",
      "hari": 1,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Matematika Peminatan",
      "kelas": "XI IPA 4",
      "ruang": "SU3.04"
    },
    {
      "id": "seed174",
      "hari": 1,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Matematika Peminatan",
      "kelas": "XI IPA 4",
      "ruang": "SU3.04"
    },
    {
      "id": "seed194",
      "hari": 1,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Matematika Peminatan",
      "kelas": "XI IPA 3",
      "ruang": "SU3.03"
    },
    {
      "id": "seed313",
      "hari": 3,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Matematika Peminatan",
      "kelas": "XII IPA 4",
      "ruang": "SU1.03"
    },
    {
      "id": "seed334",
      "hari": 3,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Matematika Peminatan",
      "kelas": "XII IPA 4",
      "ruang": "SU1.03"
    },
    {
      "id": "seed353",
      "hari": 3,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Matematika Peminatan",
      "kelas": "XII IPA 2",
      "ruang": "SU1.01"
    },
    {
      "id": "seed374",
      "hari": 3,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Matematika Peminatan",
      "kelas": "XII IPA 2",
      "ruang": "SU1.01"
    },
    {
      "id": "seed402",
      "hari": 4,
      "mulai": "09:20",
      "selesai": "10:10",
      "mapel": "Matematika Peminatan",
      "kelas": "XI IPA 2",
      "ruang": "H1.06"
    },
    {
      "id": "seed423",
      "hari": 4,
      "mulai": "10:10",
      "selesai": "11:00",
      "mapel": "Matematika Peminatan",
      "kelas": "XI IPA 2",
      "ruang": "H1.06"
    }
  ],
  "g18": [
    {
      "id": "seed10",
      "hari": 0,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Matematika",
      "kelas": "XI IPA 2",
      "ruang": "H1.03"
    },
    {
      "id": "seed31",
      "hari": 0,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Matematika",
      "kelas": "XI IPA 2",
      "ruang": "H1.03"
    }
  ],
  "g34": [
    {
      "id": "seed11",
      "hari": 0,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Geografi",
      "kelas": "XI IPS 1",
      "ruang": "H1.04"
    },
    {
      "id": "seed32",
      "hari": 0,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Geografi",
      "kelas": "XI IPS 1",
      "ruang": "H1.04"
    },
    {
      "id": "seed112",
      "hari": 1,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Geografi",
      "kelas": "XI IPS 2",
      "ruang": "SU3.05"
    },
    {
      "id": "seed133",
      "hari": 1,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Geografi",
      "kelas": "XI IPS 2",
      "ruang": "SU3.05"
    },
    {
      "id": "seed196",
      "hari": 1,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Geografi",
      "kelas": "XI IPS 2",
      "ruang": "SU3.05"
    },
    {
      "id": "seed445",
      "hari": 5,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Geografi",
      "kelas": "XI IPS 1",
      "ruang": "H3.06"
    }
  ],
  "g32": [
    {
      "id": "seed12",
      "hari": 0,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Biologi",
      "kelas": "XI IPA 3",
      "ruang": "SU3.03"
    },
    {
      "id": "seed33",
      "hari": 0,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Biologi",
      "kelas": "XI IPA 3",
      "ruang": "SU3.03"
    },
    {
      "id": "seed52",
      "hari": 0,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Biologi",
      "kelas": "XI IPA 2",
      "ruang": "H1.03"
    },
    {
      "id": "seed73",
      "hari": 0,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Biologi",
      "kelas": "XI IPA 2",
      "ruang": "H1.03"
    },
    {
      "id": "seed111",
      "hari": 1,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Biologi",
      "kelas": "XI IPA 4",
      "ruang": "SU3.04"
    },
    {
      "id": "seed132",
      "hari": 1,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Biologi",
      "kelas": "XI IPA 4",
      "ruang": "SU3.04"
    },
    {
      "id": "seed149",
      "hari": 1,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Biologi",
      "kelas": "XI IPA 1",
      "ruang": "H1.02"
    },
    {
      "id": "seed170",
      "hari": 1,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Biologi",
      "kelas": "XI IPA 1",
      "ruang": "H1.02"
    },
    {
      "id": "seed192",
      "hari": 1,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Biologi",
      "kelas": "XI IPA 2",
      "ruang": "H1.03"
    },
    {
      "id": "seed213",
      "hari": 2,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Biologi",
      "kelas": "XII IPA 2",
      "ruang": "SU1.01"
    },
    {
      "id": "seed234",
      "hari": 2,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Biologi",
      "kelas": "XII IPA 2",
      "ruang": "SU1.01"
    },
    {
      "id": "seed253",
      "hari": 2,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Biologi",
      "kelas": "XII IPA 1",
      "ruang": "H1.05"
    },
    {
      "id": "seed274",
      "hari": 2,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Biologi",
      "kelas": "XII IPA 1",
      "ruang": "H1.05"
    },
    {
      "id": "seed312",
      "hari": 3,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Biologi",
      "kelas": "XII IPA 3",
      "ruang": "SU1.02"
    },
    {
      "id": "seed333",
      "hari": 3,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Biologi",
      "kelas": "XII IPA 3",
      "ruang": "SU1.02"
    },
    {
      "id": "seed355",
      "hari": 3,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Biologi",
      "kelas": "XII IPA 4",
      "ruang": "SU1.03"
    },
    {
      "id": "seed376",
      "hari": 3,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Biologi",
      "kelas": "XII IPA 4",
      "ruang": "SU1.03"
    },
    {
      "id": "seed405",
      "hari": 4,
      "mulai": "09:20",
      "selesai": "10:10",
      "mapel": "Biologi",
      "kelas": "XI IPA 4",
      "ruang": "SU1.02"
    },
    {
      "id": "seed425",
      "hari": 4,
      "mulai": "10:10",
      "selesai": "11:00",
      "mapel": "Biologi",
      "kelas": "XI IPA 3",
      "ruang": "SU1.01"
    },
    {
      "id": "seed443",
      "hari": 5,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Biologi",
      "kelas": "XI IPA 1",
      "ruang": "H1.05"
    }
  ],
  "g43": [
    {
      "id": "seed13",
      "hari": 0,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Kimia",
      "kelas": "XI IPA 4",
      "ruang": "SU3.04"
    },
    {
      "id": "seed34",
      "hari": 0,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Kimia",
      "kelas": "XI IPA 4",
      "ruang": "SU3.04"
    },
    {
      "id": "seed54",
      "hari": 0,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Kimia",
      "kelas": "XI IPA 3",
      "ruang": "SU3.03"
    },
    {
      "id": "seed75",
      "hari": 0,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Kimia",
      "kelas": "XI IPA 3",
      "ruang": "SU3.03"
    },
    {
      "id": "seed94",
      "hari": 0,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Kimia",
      "kelas": "XI IPA 2",
      "ruang": "H1.03"
    },
    {
      "id": "seed107",
      "hari": 1,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Kimia",
      "kelas": "XI IPA 1",
      "ruang": "H1.02"
    },
    {
      "id": "seed128",
      "hari": 1,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Kimia",
      "kelas": "XI IPA 1",
      "ruang": "H1.02"
    },
    {
      "id": "seed150",
      "hari": 1,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Kimia",
      "kelas": "XI IPA 2",
      "ruang": "H1.03"
    },
    {
      "id": "seed171",
      "hari": 1,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Kimia",
      "kelas": "XI IPA 2",
      "ruang": "H1.03"
    },
    {
      "id": "seed191",
      "hari": 1,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Kimia",
      "kelas": "XI IPA 1",
      "ruang": "H1.02"
    },
    {
      "id": "seed404",
      "hari": 4,
      "mulai": "09:20",
      "selesai": "10:10",
      "mapel": "Kimia",
      "kelas": "XI IPA 3",
      "ruang": "SU1.01"
    },
    {
      "id": "seed426",
      "hari": 4,
      "mulai": "10:10",
      "selesai": "11:00",
      "mapel": "Kimia",
      "kelas": "XI IPA 4",
      "ruang": "SU1.02"
    }
  ],
  "g40": [
    {
      "id": "seed14",
      "hari": 0,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Sosiologi",
      "kelas": "XI IPS 2",
      "ruang": "SU3.05"
    },
    {
      "id": "seed35",
      "hari": 0,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Sosiologi",
      "kelas": "XI IPS 2",
      "ruang": "SU3.05"
    },
    {
      "id": "seed448",
      "hari": 5,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Sosiologi",
      "kelas": "XI IPS 2",
      "ruang": "SU1.03"
    }
  ],
  "g2": [
    {
      "id": "seed15",
      "hari": 0,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Bahasa Inggris",
      "kelas": "XII IPA 1",
      "ruang": "H1.05"
    },
    {
      "id": "seed36",
      "hari": 0,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Bahasa Inggris",
      "kelas": "XII IPA 1",
      "ruang": "H1.05"
    },
    {
      "id": "seed157",
      "hari": 1,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Inggris",
      "kelas": "XII IPA 2",
      "ruang": "SU1.01"
    },
    {
      "id": "seed178",
      "hari": 1,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Inggris",
      "kelas": "XII IPA 2",
      "ruang": "SU1.01"
    },
    {
      "id": "seed212",
      "hari": 2,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Bahasa Inggris",
      "kelas": "XII IPS 1",
      "ruang": "H1.06"
    },
    {
      "id": "seed233",
      "hari": 2,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Bahasa Inggris",
      "kelas": "XII IPS 1",
      "ruang": "H1.06"
    },
    {
      "id": "seed428",
      "hari": 4,
      "mulai": "10:10",
      "selesai": "11:00",
      "mapel": "Bahasa Inggris",
      "kelas": "XII IPA 1",
      "ruang": "D1"
    },
    {
      "id": "seed429",
      "hari": 4,
      "mulai": "10:10",
      "selesai": "11:00",
      "mapel": "Bahasa Inggris",
      "kelas": "XII IPS 1",
      "ruang": "D1"
    },
    {
      "id": "seed430",
      "hari": 4,
      "mulai": "10:10",
      "selesai": "11:00",
      "mapel": "Bahasa Inggris",
      "kelas": "XII IPA 2",
      "ruang": "D1"
    },
    {
      "id": "seed452",
      "hari": 5,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Inggris",
      "kelas": "XII IPA 3",
      "ruang": "AHC 5"
    },
    {
      "id": "seed453",
      "hari": 5,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Inggris",
      "kelas": "XII IPA 4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed454",
      "hari": 5,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Inggris",
      "kelas": "XII IPS 2",
      "ruang": "AHC 5"
    },
    {
      "id": "seed455",
      "hari": 5,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Inggris",
      "kelas": "XII IPS 3",
      "ruang": "AHC 5"
    }
  ],
  "g22": [
    {
      "id": "seed16",
      "hari": 0,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "PKN",
      "kelas": "XII IPS 1",
      "ruang": "H1.06"
    },
    {
      "id": "seed37",
      "hari": 0,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "PKN",
      "kelas": "XII IPS 1",
      "ruang": "H1.06"
    },
    {
      "id": "seed63",
      "hari": 0,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "PKN",
      "kelas": "XII IPS 3",
      "ruang": "SU1.05"
    },
    {
      "id": "seed84",
      "hari": 0,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "PKN",
      "kelas": "XII IPS 3",
      "ruang": "SU1.05"
    },
    {
      "id": "seed258",
      "hari": 2,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "PKN",
      "kelas": "XII IPS 2",
      "ruang": "SU1.04"
    },
    {
      "id": "seed279",
      "hari": 2,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "PKN",
      "kelas": "XII IPS 2",
      "ruang": "SU1.04"
    }
  ],
  "g20": [
    {
      "id": "seed17",
      "hari": 0,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Sejarah Indonesia",
      "kelas": "XII IPA 2",
      "ruang": "SU1.01"
    },
    {
      "id": "seed38",
      "hari": 0,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Sejarah Indonesia",
      "kelas": "XII IPA 2",
      "ruang": "SU1.01"
    },
    {
      "id": "seed58",
      "hari": 0,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Sejarah Indonesia",
      "kelas": "XII IPS 1",
      "ruang": "H1.06"
    },
    {
      "id": "seed79",
      "hari": 0,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Sejarah Indonesia",
      "kelas": "XII IPS 1",
      "ruang": "H1.06"
    },
    {
      "id": "seed113",
      "hari": 1,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Sejarah Indonesia",
      "kelas": "XII IPA 1",
      "ruang": "H1.05"
    },
    {
      "id": "seed134",
      "hari": 1,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Sejarah Indonesia",
      "kelas": "XII IPA 1",
      "ruang": "H1.05"
    },
    {
      "id": "seed159",
      "hari": 1,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Sejarah Indonesia",
      "kelas": "XII IPA 4",
      "ruang": "SU1.03"
    },
    {
      "id": "seed180",
      "hari": 1,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Sejarah Indonesia",
      "kelas": "XII IPA 4",
      "ruang": "SU1.03"
    },
    {
      "id": "seed214",
      "hari": 2,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Sejarah Indonesia",
      "kelas": "XII IPA 3",
      "ruang": "SU1.02"
    },
    {
      "id": "seed235",
      "hari": 2,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Sejarah Indonesia",
      "kelas": "XII IPA 3",
      "ruang": "SU1.02"
    },
    {
      "id": "seed314",
      "hari": 3,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Sejarah Indonesia",
      "kelas": "XII IPS 2",
      "ruang": "SU1.04"
    },
    {
      "id": "seed335",
      "hari": 3,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Sejarah Indonesia",
      "kelas": "XII IPS 2",
      "ruang": "SU1.04"
    },
    {
      "id": "seed357",
      "hari": 3,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Sejarah Indonesia",
      "kelas": "XII IPS 3",
      "ruang": "SU1.05"
    },
    {
      "id": "seed378",
      "hari": 3,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Sejarah Indonesia",
      "kelas": "XII IPS 3",
      "ruang": "SU1.05"
    }
  ],
  "g27": [
    {
      "id": "seed18",
      "hari": 0,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Fisika",
      "kelas": "XII IPA 3",
      "ruang": "SU1.02"
    },
    {
      "id": "seed39",
      "hari": 0,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Fisika",
      "kelas": "XII IPA 3",
      "ruang": "SU1.02"
    },
    {
      "id": "seed55",
      "hari": 0,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Fisika",
      "kelas": "XI IPA 4",
      "ruang": "SU3.04"
    },
    {
      "id": "seed76",
      "hari": 0,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Fisika",
      "kelas": "XI IPA 4",
      "ruang": "SU3.04"
    },
    {
      "id": "seed93",
      "hari": 0,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Fisika",
      "kelas": "XI IPA 1",
      "ruang": "H1.02"
    },
    {
      "id": "seed108",
      "hari": 1,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Fisika",
      "kelas": "XI IPA 2",
      "ruang": "H1.03"
    },
    {
      "id": "seed129",
      "hari": 1,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Fisika",
      "kelas": "XI IPA 2",
      "ruang": "H1.03"
    },
    {
      "id": "seed152",
      "hari": 1,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Fisika",
      "kelas": "XI IPA 3",
      "ruang": "SU3.03"
    },
    {
      "id": "seed173",
      "hari": 1,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Fisika",
      "kelas": "XI IPA 3",
      "ruang": "SU3.03"
    },
    {
      "id": "seed195",
      "hari": 1,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Fisika",
      "kelas": "XI IPA 4",
      "ruang": "SU3.04"
    },
    {
      "id": "seed257",
      "hari": 2,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Fisika",
      "kelas": "XII IPA 4",
      "ruang": "SU1.03"
    },
    {
      "id": "seed278",
      "hari": 2,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Fisika",
      "kelas": "XII IPA 4",
      "ruang": "SU1.03"
    },
    {
      "id": "seed311",
      "hari": 3,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Fisika",
      "kelas": "XII IPA 2",
      "ruang": "SU1.01"
    },
    {
      "id": "seed332",
      "hari": 3,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Fisika",
      "kelas": "XII IPA 2",
      "ruang": "SU1.01"
    },
    {
      "id": "seed351",
      "hari": 3,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Fisika",
      "kelas": "XII IPA 1",
      "ruang": "H1.05"
    },
    {
      "id": "seed372",
      "hari": 3,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Fisika",
      "kelas": "XII IPA 1",
      "ruang": "H1.05"
    },
    {
      "id": "seed446",
      "hari": 5,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Fisika",
      "kelas": "XI IPA 3",
      "ruang": "SU1.01"
    }
  ],
  "g30": [
    {
      "id": "seed19",
      "hari": 0,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Kimia",
      "kelas": "XII IPA 4",
      "ruang": "SU1.03"
    },
    {
      "id": "seed40",
      "hari": 0,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Kimia",
      "kelas": "XII IPA 4",
      "ruang": "SU1.03"
    },
    {
      "id": "seed60",
      "hari": 0,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Kimia",
      "kelas": "XII IPA 3",
      "ruang": "SU1.02"
    },
    {
      "id": "seed81",
      "hari": 0,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Kimia",
      "kelas": "XII IPA 3",
      "ruang": "SU1.02"
    },
    {
      "id": "seed211",
      "hari": 2,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Kimia",
      "kelas": "XII IPA 1",
      "ruang": "H1.05"
    },
    {
      "id": "seed232",
      "hari": 2,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Kimia",
      "kelas": "XII IPA 1",
      "ruang": "H1.05"
    },
    {
      "id": "seed255",
      "hari": 2,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Kimia",
      "kelas": "XII IPA 2",
      "ruang": "SU1.01"
    },
    {
      "id": "seed276",
      "hari": 2,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Kimia",
      "kelas": "XII IPA 2",
      "ruang": "SU1.01"
    }
  ],
  "g6": [
    {
      "id": "seed20",
      "hari": 0,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Bahasa Inggris",
      "kelas": "XII IPS 2",
      "ruang": "SU1.04"
    },
    {
      "id": "seed41",
      "hari": 0,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Bahasa Inggris",
      "kelas": "XII IPS 2",
      "ruang": "SU1.04"
    },
    {
      "id": "seed61",
      "hari": 0,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Inggris",
      "kelas": "XII IPA 4",
      "ruang": "SU1.03"
    },
    {
      "id": "seed82",
      "hari": 0,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Inggris",
      "kelas": "XII IPA 4",
      "ruang": "SU1.03"
    },
    {
      "id": "seed85",
      "hari": 0,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Al-Fatihah",
      "kelas": "X-1",
      "ruang": "D1"
    },
    {
      "id": "seed86",
      "hari": 0,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Al-Fatihah",
      "kelas": "X-2",
      "ruang": "D1"
    },
    {
      "id": "seed87",
      "hari": 0,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Al-Fatihah",
      "kelas": "X-3",
      "ruang": "D1"
    },
    {
      "id": "seed161",
      "hari": 1,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Inggris",
      "kelas": "XII IPS 3",
      "ruang": "SU1.05"
    },
    {
      "id": "seed182",
      "hari": 1,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Inggris",
      "kelas": "XII IPS 3",
      "ruang": "SU1.05"
    },
    {
      "id": "seed217",
      "hari": 2,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Bahasa Indonesia",
      "kelas": "XII IPS 3",
      "ruang": "SU1.05"
    },
    {
      "id": "seed238",
      "hari": 2,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Bahasa Indonesia",
      "kelas": "XII IPS 3",
      "ruang": "SU1.05"
    },
    {
      "id": "seed354",
      "hari": 3,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Inggris",
      "kelas": "XII IPA 3",
      "ruang": "SU1.02"
    },
    {
      "id": "seed375",
      "hari": 3,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Inggris",
      "kelas": "XII IPA 3",
      "ruang": "SU1.02"
    }
  ],
  "g36": [
    {
      "id": "seed21",
      "hari": 0,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Sosiologi",
      "kelas": "XII IPS 3",
      "ruang": "SU1.05"
    },
    {
      "id": "seed42",
      "hari": 0,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Sosiologi",
      "kelas": "XII IPS 3",
      "ruang": "SU1.05"
    },
    {
      "id": "seed62",
      "hari": 0,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Sosiologi",
      "kelas": "XII IPS 2",
      "ruang": "SU1.04"
    },
    {
      "id": "seed83",
      "hari": 0,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Sosiologi",
      "kelas": "XII IPS 2",
      "ruang": "SU1.04"
    },
    {
      "id": "seed95",
      "hari": 0,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Sosiologi",
      "kelas": "XI IPS 1",
      "ruang": "H1.04"
    },
    {
      "id": "seed109",
      "hari": 1,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Sosiologi",
      "kelas": "XI IPS 1",
      "ruang": "H1.04"
    },
    {
      "id": "seed130",
      "hari": 1,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Sosiologi",
      "kelas": "XI IPS 1",
      "ruang": "H1.04"
    },
    {
      "id": "seed254",
      "hari": 2,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Sosiologi",
      "kelas": "XII IPS 1",
      "ruang": "H1.06"
    },
    {
      "id": "seed275",
      "hari": 2,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Sosiologi",
      "kelas": "XII IPS 1",
      "ruang": "H1.06"
    }
  ],
  "g7": [
    {
      "id": "seed43",
      "hari": 0,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Matematika",
      "kelas": "X-1",
      "ruang": "D1"
    },
    {
      "id": "seed44",
      "hari": 0,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Matematika",
      "kelas": "X-2",
      "ruang": "D1"
    },
    {
      "id": "seed45",
      "hari": 0,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Matematika",
      "kelas": "X-3",
      "ruang": "D1"
    },
    {
      "id": "seed64",
      "hari": 0,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Matematika",
      "kelas": "X-1",
      "ruang": "D1"
    },
    {
      "id": "seed65",
      "hari": 0,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Matematika",
      "kelas": "X-2",
      "ruang": "D1"
    },
    {
      "id": "seed66",
      "hari": 0,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Matematika",
      "kelas": "X-3",
      "ruang": "D1"
    },
    {
      "id": "seed197",
      "hari": 2,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Matematika",
      "kelas": "X-1",
      "ruang": "H1.04"
    },
    {
      "id": "seed218",
      "hari": 2,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Matematika",
      "kelas": "X-1",
      "ruang": "H1.04"
    },
    {
      "id": "seed240",
      "hari": 2,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Matematika",
      "kelas": "X-2",
      "ruang": "H1.05"
    },
    {
      "id": "seed261",
      "hari": 2,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Matematika",
      "kelas": "X-2",
      "ruang": "H1.05"
    },
    {
      "id": "seed395",
      "hari": 4,
      "mulai": "09:20",
      "selesai": "10:10",
      "mapel": "Matematika",
      "kelas": "X-3",
      "ruang": "H1.04"
    },
    {
      "id": "seed416",
      "hari": 4,
      "mulai": "10:10",
      "selesai": "11:00",
      "mapel": "Matematika",
      "kelas": "X-3",
      "ruang": "H1.04"
    }
  ],
  "g19": [
    {
      "id": "seed46",
      "hari": 0,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Indonesia",
      "kelas": "X-4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed47",
      "hari": 0,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Indonesia",
      "kelas": "X-5",
      "ruang": "AHC 5"
    },
    {
      "id": "seed48",
      "hari": 0,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Indonesia",
      "kelas": "X-6",
      "ruang": "AHC 5"
    },
    {
      "id": "seed49",
      "hari": 0,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Indonesia",
      "kelas": "X-7",
      "ruang": "AHC 5"
    },
    {
      "id": "seed50",
      "hari": 0,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Indonesia",
      "kelas": "X-8",
      "ruang": "AHC 5"
    },
    {
      "id": "seed67",
      "hari": 0,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Indonesia",
      "kelas": "X-4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed68",
      "hari": 0,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Indonesia",
      "kelas": "X-5",
      "ruang": "AHC 5"
    },
    {
      "id": "seed69",
      "hari": 0,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Indonesia",
      "kelas": "X-6",
      "ruang": "AHC 5"
    },
    {
      "id": "seed70",
      "hari": 0,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Indonesia",
      "kelas": "X-7",
      "ruang": "AHC 5"
    },
    {
      "id": "seed71",
      "hari": 0,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Indonesia",
      "kelas": "X-8",
      "ruang": "AHC 5"
    },
    {
      "id": "seed88",
      "hari": 0,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Al-Fatihah",
      "kelas": "X-4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed89",
      "hari": 0,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Al-Fatihah",
      "kelas": "X-5",
      "ruang": "AHC 5"
    },
    {
      "id": "seed90",
      "hari": 0,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Al-Fatihah",
      "kelas": "X-6",
      "ruang": "AHC 5"
    },
    {
      "id": "seed91",
      "hari": 0,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Al-Fatihah",
      "kelas": "X-7",
      "ruang": "AHC 5"
    },
    {
      "id": "seed92",
      "hari": 0,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Al-Fatihah",
      "kelas": "X-8",
      "ruang": "AHC 5"
    },
    {
      "id": "seed141",
      "hari": 1,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Indonesia",
      "kelas": "X-1",
      "ruang": "D1"
    },
    {
      "id": "seed142",
      "hari": 1,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Indonesia",
      "kelas": "X-2",
      "ruang": "D1"
    },
    {
      "id": "seed143",
      "hari": 1,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Indonesia",
      "kelas": "X-3",
      "ruang": "D1"
    },
    {
      "id": "seed162",
      "hari": 1,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Indonesia",
      "kelas": "X-1",
      "ruang": "D1"
    },
    {
      "id": "seed163",
      "hari": 1,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Indonesia",
      "kelas": "X-2",
      "ruang": "D1"
    },
    {
      "id": "seed164",
      "hari": 1,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Indonesia",
      "kelas": "X-3",
      "ruang": "D1"
    },
    {
      "id": "seed407",
      "hari": 4,
      "mulai": "09:20",
      "selesai": "10:10",
      "mapel": "Bahasa Indonesia",
      "kelas": "XII IPA 1",
      "ruang": "D1"
    },
    {
      "id": "seed408",
      "hari": 4,
      "mulai": "09:20",
      "selesai": "10:10",
      "mapel": "Bahasa Indonesia",
      "kelas": "XII IPS 1",
      "ruang": "D1"
    },
    {
      "id": "seed409",
      "hari": 4,
      "mulai": "09:20",
      "selesai": "10:10",
      "mapel": "Bahasa Indonesia",
      "kelas": "XII IPA 2",
      "ruang": "D1"
    },
    {
      "id": "seed431",
      "hari": 4,
      "mulai": "10:10",
      "selesai": "11:00",
      "mapel": "Bahasa Indonesia",
      "kelas": "XII IPA 3",
      "ruang": "AHC 5"
    },
    {
      "id": "seed432",
      "hari": 4,
      "mulai": "10:10",
      "selesai": "11:00",
      "mapel": "Bahasa Indonesia",
      "kelas": "XII IPA 4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed433",
      "hari": 4,
      "mulai": "10:10",
      "selesai": "11:00",
      "mapel": "Bahasa Indonesia",
      "kelas": "XII IPS 2",
      "ruang": "AHC 5"
    },
    {
      "id": "seed434",
      "hari": 4,
      "mulai": "10:10",
      "selesai": "11:00",
      "mapel": "Bahasa Indonesia",
      "kelas": "XII IPS 3",
      "ruang": "AHC 5"
    }
  ],
  "g14": [
    {
      "id": "seed51",
      "hari": 0,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Matematika",
      "kelas": "XI IPA 1",
      "ruang": "H1.02"
    },
    {
      "id": "seed72",
      "hari": 0,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Matematika",
      "kelas": "XI IPA 1",
      "ruang": "H1.02"
    },
    {
      "id": "seed97",
      "hari": 0,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Matematika",
      "kelas": "XI IPA 4",
      "ruang": "SU3.04"
    },
    {
      "id": "seed447",
      "hari": 5,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Matematika",
      "kelas": "XI IPA 4",
      "ruang": "SU1.02"
    }
  ],
  "g35": [
    {
      "id": "seed53",
      "hari": 0,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Ekonomi",
      "kelas": "XI IPS 1",
      "ruang": "H1.04"
    },
    {
      "id": "seed74",
      "hari": 0,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Ekonomi",
      "kelas": "XI IPS 1",
      "ruang": "H1.04"
    },
    {
      "id": "seed406",
      "hari": 4,
      "mulai": "09:20",
      "selesai": "10:10",
      "mapel": "Ekonomi",
      "kelas": "XI IPS 2",
      "ruang": "SU1.03"
    },
    {
      "id": "seed427",
      "hari": 4,
      "mulai": "10:10",
      "selesai": "11:00",
      "mapel": "Ekonomi",
      "kelas": "XI IPS 2",
      "ruang": "SU1.03"
    }
  ],
  "g48": [
    {
      "id": "seed56",
      "hari": 0,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "PKN",
      "kelas": "XI IPS 2",
      "ruang": "SU3.05"
    },
    {
      "id": "seed77",
      "hari": 0,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "PKN",
      "kelas": "XI IPS 2",
      "ruang": "SU3.05"
    },
    {
      "id": "seed403",
      "hari": 4,
      "mulai": "09:20",
      "selesai": "10:10",
      "mapel": "PKN",
      "kelas": "XI IPS 1",
      "ruang": "H3.06"
    },
    {
      "id": "seed424",
      "hari": 4,
      "mulai": "10:10",
      "selesai": "11:00",
      "mapel": "PKN",
      "kelas": "XI IPS 1",
      "ruang": "H3.06"
    }
  ],
  "g29": [
    {
      "id": "seed59",
      "hari": 0,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Matematika",
      "kelas": "XII IPA 2",
      "ruang": "SU1.01"
    },
    {
      "id": "seed80",
      "hari": 0,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Matematika",
      "kelas": "XII IPA 2",
      "ruang": "SU1.01"
    },
    {
      "id": "seed110",
      "hari": 1,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Matematika",
      "kelas": "XI IPA 3",
      "ruang": "SU3.03"
    },
    {
      "id": "seed131",
      "hari": 1,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Matematika",
      "kelas": "XI IPA 3",
      "ruang": "SU3.03"
    },
    {
      "id": "seed154",
      "hari": 1,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Matematika",
      "kelas": "XI IPS 2",
      "ruang": "SU3.05"
    },
    {
      "id": "seed175",
      "hari": 1,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Matematika",
      "kelas": "XI IPS 2",
      "ruang": "SU3.05"
    }
  ],
  "g16": [
    {
      "id": "seed98",
      "hari": 0,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Ekonomi",
      "kelas": "XI IPS 2",
      "ruang": "SU3.05"
    },
    {
      "id": "seed114",
      "hari": 1,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Ekonomi",
      "kelas": "XII IPS 1",
      "ruang": "H1.06"
    },
    {
      "id": "seed135",
      "hari": 1,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Ekonomi",
      "kelas": "XII IPS 1",
      "ruang": "H1.06"
    },
    {
      "id": "seed160",
      "hari": 1,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Ekonomi",
      "kelas": "XII IPS 2",
      "ruang": "SU1.04"
    },
    {
      "id": "seed181",
      "hari": 1,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Ekonomi",
      "kelas": "XII IPS 2",
      "ruang": "SU1.04"
    },
    {
      "id": "seed193",
      "hari": 1,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Ekonomi",
      "kelas": "XI IPS 1",
      "ruang": "H1.04"
    },
    {
      "id": "seed198",
      "hari": 2,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "IPS",
      "kelas": "X-2",
      "ruang": "H1.05"
    },
    {
      "id": "seed219",
      "hari": 2,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "IPS",
      "kelas": "X-2",
      "ruang": "H1.05"
    },
    {
      "id": "seed239",
      "hari": 2,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "IPS",
      "kelas": "X-1",
      "ruang": "H1.04"
    },
    {
      "id": "seed260",
      "hari": 2,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "IPS",
      "kelas": "X-1",
      "ruang": "H1.04"
    },
    {
      "id": "seed283",
      "hari": 2,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "IPS",
      "kelas": "X-3",
      "ruang": "H1.06"
    },
    {
      "id": "seed315",
      "hari": 3,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Ekonomi",
      "kelas": "XII IPS 3",
      "ruang": "SU1.05"
    },
    {
      "id": "seed336",
      "hari": 3,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Ekonomi",
      "kelas": "XII IPS 3",
      "ruang": "SU1.05"
    },
    {
      "id": "seed342",
      "hari": 3,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "IPS",
      "kelas": "X-6",
      "ruang": "SU3.03"
    },
    {
      "id": "seed363",
      "hari": 3,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "IPS",
      "kelas": "X-6",
      "ruang": "SU3.03"
    },
    {
      "id": "seed397",
      "hari": 4,
      "mulai": "09:20",
      "selesai": "10:10",
      "mapel": "IPS",
      "kelas": "X-5",
      "ruang": "SU3.02"
    },
    {
      "id": "seed418",
      "hari": 4,
      "mulai": "10:10",
      "selesai": "11:00",
      "mapel": "IPS",
      "kelas": "X-5",
      "ruang": "SU3.02"
    },
    {
      "id": "seed437",
      "hari": 5,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "IPS",
      "kelas": "X-3",
      "ruang": "H1.04"
    }
  ],
  "g31": [
    {
      "id": "seed99",
      "hari": 1,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "IPA",
      "kelas": "X-1",
      "ruang": "D1"
    },
    {
      "id": "seed100",
      "hari": 1,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "IPA",
      "kelas": "X-2",
      "ruang": "D1"
    },
    {
      "id": "seed101",
      "hari": 1,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "IPA",
      "kelas": "X-3",
      "ruang": "D1"
    },
    {
      "id": "seed120",
      "hari": 1,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "IPA",
      "kelas": "X-1",
      "ruang": "D1"
    },
    {
      "id": "seed121",
      "hari": 1,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "IPA",
      "kelas": "X-2",
      "ruang": "D1"
    },
    {
      "id": "seed122",
      "hari": 1,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "IPA",
      "kelas": "X-3",
      "ruang": "D1"
    },
    {
      "id": "seed202",
      "hari": 2,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "IPA",
      "kelas": "X-6",
      "ruang": "SU3.03"
    },
    {
      "id": "seed223",
      "hari": 2,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "IPA",
      "kelas": "X-6",
      "ruang": "SU3.03"
    },
    {
      "id": "seed243",
      "hari": 2,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "IPA",
      "kelas": "X-5",
      "ruang": "SU3.02"
    },
    {
      "id": "seed264",
      "hari": 2,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "IPA",
      "kelas": "X-5",
      "ruang": "SU3.02"
    },
    {
      "id": "seed288",
      "hari": 2,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "IPA",
      "kelas": "X-8",
      "ruang": "SU3.05"
    },
    {
      "id": "seed343",
      "hari": 3,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "IPA",
      "kelas": "X-7",
      "ruang": "SU3.04"
    },
    {
      "id": "seed364",
      "hari": 3,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "IPA",
      "kelas": "X-7",
      "ruang": "SU3.04"
    },
    {
      "id": "seed386",
      "hari": 3,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "IPA",
      "kelas": "X-8",
      "ruang": "SU3.05"
    },
    {
      "id": "seed396",
      "hari": 4,
      "mulai": "09:20",
      "selesai": "10:10",
      "mapel": "IPA",
      "kelas": "X-4",
      "ruang": "SU3.01"
    },
    {
      "id": "seed417",
      "hari": 4,
      "mulai": "10:10",
      "selesai": "11:00",
      "mapel": "IPA",
      "kelas": "X-4",
      "ruang": "SU3.01"
    }
  ],
  "g28": [
    {
      "id": "seed102",
      "hari": 1,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Matematika",
      "kelas": "X-4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed103",
      "hari": 1,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Matematika",
      "kelas": "X-5",
      "ruang": "AHC 5"
    },
    {
      "id": "seed104",
      "hari": 1,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Matematika",
      "kelas": "X-6",
      "ruang": "AHC 5"
    },
    {
      "id": "seed105",
      "hari": 1,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Matematika",
      "kelas": "X-7",
      "ruang": "AHC 5"
    },
    {
      "id": "seed106",
      "hari": 1,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Matematika",
      "kelas": "X-8",
      "ruang": "AHC 5"
    },
    {
      "id": "seed123",
      "hari": 1,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Matematika",
      "kelas": "X-4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed124",
      "hari": 1,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Matematika",
      "kelas": "X-5",
      "ruang": "AHC 5"
    },
    {
      "id": "seed125",
      "hari": 1,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Matematika",
      "kelas": "X-6",
      "ruang": "AHC 5"
    },
    {
      "id": "seed126",
      "hari": 1,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Matematika",
      "kelas": "X-7",
      "ruang": "AHC 5"
    },
    {
      "id": "seed127",
      "hari": 1,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Matematika",
      "kelas": "X-8",
      "ruang": "AHC 5"
    },
    {
      "id": "seed203",
      "hari": 2,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Matematika",
      "kelas": "X-7",
      "ruang": "SU3.04"
    },
    {
      "id": "seed224",
      "hari": 2,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Matematika",
      "kelas": "X-7",
      "ruang": "SU3.04"
    },
    {
      "id": "seed298",
      "hari": 3,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Matematika",
      "kelas": "X-4",
      "ruang": "SU3.01"
    },
    {
      "id": "seed319",
      "hari": 3,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Matematika",
      "kelas": "X-4",
      "ruang": "SU3.01"
    },
    {
      "id": "seed398",
      "hari": 4,
      "mulai": "09:20",
      "selesai": "10:10",
      "mapel": "Matematika",
      "kelas": "X-6",
      "ruang": "SU3.03"
    },
    {
      "id": "seed419",
      "hari": 4,
      "mulai": "10:10",
      "selesai": "11:00",
      "mapel": "Matematika",
      "kelas": "X-6",
      "ruang": "SU3.03"
    }
  ],
  "g8": [
    {
      "id": "seed115",
      "hari": 1,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Bahasa Indonesia",
      "kelas": "XII IPA 2",
      "ruang": "SU1.01"
    },
    {
      "id": "seed136",
      "hari": 1,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Bahasa Indonesia",
      "kelas": "XII IPA 2",
      "ruang": "SU1.01"
    },
    {
      "id": "seed155",
      "hari": 1,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Indonesia",
      "kelas": "XII IPA 1",
      "ruang": "H1.05"
    },
    {
      "id": "seed176",
      "hari": 1,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Indonesia",
      "kelas": "XII IPA 1",
      "ruang": "H1.05"
    },
    {
      "id": "seed215",
      "hari": 2,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Bahasa Indonesia",
      "kelas": "XII IPA 4",
      "ruang": "SU1.03"
    },
    {
      "id": "seed236",
      "hari": 2,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Bahasa Indonesia",
      "kelas": "XII IPA 4",
      "ruang": "SU1.03"
    },
    {
      "id": "seed256",
      "hari": 2,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Indonesia",
      "kelas": "XII IPA 3",
      "ruang": "SU1.02"
    },
    {
      "id": "seed277",
      "hari": 2,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Indonesia",
      "kelas": "XII IPA 3",
      "ruang": "SU1.02"
    },
    {
      "id": "seed310",
      "hari": 3,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Bahasa Indonesia",
      "kelas": "XII IPS 1",
      "ruang": "H1.06"
    },
    {
      "id": "seed331",
      "hari": 3,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Bahasa Indonesia",
      "kelas": "XII IPS 1",
      "ruang": "H1.06"
    },
    {
      "id": "seed356",
      "hari": 3,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Indonesia",
      "kelas": "XII IPS 2",
      "ruang": "SU1.04"
    },
    {
      "id": "seed377",
      "hari": 3,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Indonesia",
      "kelas": "XII IPS 2",
      "ruang": "SU1.04"
    }
  ],
  "g15": [
    {
      "id": "seed117",
      "hari": 1,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Matematika",
      "kelas": "XII IPA 4",
      "ruang": "SU1.03"
    },
    {
      "id": "seed138",
      "hari": 1,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Matematika",
      "kelas": "XII IPA 4",
      "ruang": "SU1.03"
    },
    {
      "id": "seed158",
      "hari": 1,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Matematika",
      "kelas": "XII IPA 3",
      "ruang": "SU1.02"
    },
    {
      "id": "seed179",
      "hari": 1,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Matematika",
      "kelas": "XII IPA 3",
      "ruang": "SU1.02"
    },
    {
      "id": "seed186",
      "hari": 1,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Al-Fatihah",
      "kelas": "X-4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed187",
      "hari": 1,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Al-Fatihah",
      "kelas": "X-5",
      "ruang": "AHC 5"
    },
    {
      "id": "seed188",
      "hari": 1,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Al-Fatihah",
      "kelas": "X-6",
      "ruang": "AHC 5"
    },
    {
      "id": "seed189",
      "hari": 1,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Al-Fatihah",
      "kelas": "X-7",
      "ruang": "AHC 5"
    },
    {
      "id": "seed190",
      "hari": 1,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Al-Fatihah",
      "kelas": "X-8",
      "ruang": "AHC 5"
    },
    {
      "id": "seed216",
      "hari": 2,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Matematika",
      "kelas": "XII IPS 2",
      "ruang": "SU1.04"
    },
    {
      "id": "seed237",
      "hari": 2,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Matematika",
      "kelas": "XII IPS 2",
      "ruang": "SU1.04"
    },
    {
      "id": "seed259",
      "hari": 2,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Matematika",
      "kelas": "XII IPS 3",
      "ruang": "SU1.05"
    },
    {
      "id": "seed280",
      "hari": 2,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Matematika",
      "kelas": "XII IPS 3",
      "ruang": "SU1.05"
    },
    {
      "id": "seed303",
      "hari": 3,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Bahasa Indonesia",
      "kelas": "XI IPA 1",
      "ruang": "D1"
    },
    {
      "id": "seed304",
      "hari": 3,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Bahasa Indonesia",
      "kelas": "XI IPA 2",
      "ruang": "D1"
    },
    {
      "id": "seed305",
      "hari": 3,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Bahasa Indonesia",
      "kelas": "XI IPS 1",
      "ruang": "D1"
    },
    {
      "id": "seed324",
      "hari": 3,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Bahasa Indonesia",
      "kelas": "XI IPA 1",
      "ruang": "D1"
    },
    {
      "id": "seed325",
      "hari": 3,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Bahasa Indonesia",
      "kelas": "XI IPA 2",
      "ruang": "D1"
    },
    {
      "id": "seed326",
      "hari": 3,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Bahasa Indonesia",
      "kelas": "XI IPS 1",
      "ruang": "D1"
    },
    {
      "id": "seed348",
      "hari": 3,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Indonesia",
      "kelas": "XI IPA 3",
      "ruang": "AHC 5"
    },
    {
      "id": "seed349",
      "hari": 3,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Indonesia",
      "kelas": "XI IPA 4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed350",
      "hari": 3,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Indonesia",
      "kelas": "XI IPS 2",
      "ruang": "AHC 5"
    },
    {
      "id": "seed369",
      "hari": 3,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Indonesia",
      "kelas": "XI IPA 3",
      "ruang": "AHC 5"
    },
    {
      "id": "seed370",
      "hari": 3,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Indonesia",
      "kelas": "XI IPA 4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed371",
      "hari": 3,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Indonesia",
      "kelas": "XI IPS 2",
      "ruang": "AHC 5"
    },
    {
      "id": "seed383",
      "hari": 3,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "TIK",
      "kelas": "X-5",
      "ruang": "SU3.02"
    }
  ],
  "g17": [
    {
      "id": "seed118",
      "hari": 1,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Geografi",
      "kelas": "XII IPS 2",
      "ruang": "SU1.04"
    },
    {
      "id": "seed139",
      "hari": 1,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Geografi",
      "kelas": "XII IPS 2",
      "ruang": "SU1.04"
    }
  ],
  "g21": [
    {
      "id": "seed119",
      "hari": 1,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Geografi",
      "kelas": "XII IPS 3",
      "ruang": "SU1.05"
    },
    {
      "id": "seed140",
      "hari": 1,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Geografi",
      "kelas": "XII IPS 3",
      "ruang": "SU1.05"
    },
    {
      "id": "seed156",
      "hari": 1,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Geografi",
      "kelas": "XII IPS 1",
      "ruang": "H1.06"
    },
    {
      "id": "seed177",
      "hari": 1,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Geografi",
      "kelas": "XII IPS 1",
      "ruang": "H1.06"
    }
  ],
  "g4": [
    {
      "id": "seed144",
      "hari": 1,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Inggris",
      "kelas": "X-4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed145",
      "hari": 1,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Inggris",
      "kelas": "X-5",
      "ruang": "AHC 5"
    },
    {
      "id": "seed146",
      "hari": 1,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Inggris",
      "kelas": "X-6",
      "ruang": "AHC 5"
    },
    {
      "id": "seed147",
      "hari": 1,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Inggris",
      "kelas": "X-7",
      "ruang": "AHC 5"
    },
    {
      "id": "seed148",
      "hari": 1,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Inggris",
      "kelas": "X-8",
      "ruang": "AHC 5"
    },
    {
      "id": "seed165",
      "hari": 1,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Inggris",
      "kelas": "X-4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed166",
      "hari": 1,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Inggris",
      "kelas": "X-5",
      "ruang": "AHC 5"
    },
    {
      "id": "seed167",
      "hari": 1,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Inggris",
      "kelas": "X-6",
      "ruang": "AHC 5"
    },
    {
      "id": "seed168",
      "hari": 1,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Inggris",
      "kelas": "X-7",
      "ruang": "AHC 5"
    },
    {
      "id": "seed169",
      "hari": 1,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Inggris",
      "kelas": "X-8",
      "ruang": "AHC 5"
    },
    {
      "id": "seed297",
      "hari": 3,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Bahasa Inggris",
      "kelas": "X-3",
      "ruang": "H1.06"
    },
    {
      "id": "seed318",
      "hari": 3,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Bahasa Inggris",
      "kelas": "X-3",
      "ruang": "H1.06"
    },
    {
      "id": "seed337",
      "hari": 3,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Inggris",
      "kelas": "X-1",
      "ruang": "H1.04"
    },
    {
      "id": "seed358",
      "hari": 3,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Inggris",
      "kelas": "X-1",
      "ruang": "H1.04"
    },
    {
      "id": "seed380",
      "hari": 3,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Bahasa Inggris",
      "kelas": "X-2",
      "ruang": "H1.05"
    },
    {
      "id": "seed436",
      "hari": 5,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Inggris",
      "kelas": "X-2",
      "ruang": "H1.03"
    }
  ],
  "g44": [
    {
      "id": "seed151",
      "hari": 1,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Matematika",
      "kelas": "XI IPS 1",
      "ruang": "H1.04"
    },
    {
      "id": "seed172",
      "hari": 1,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Matematika",
      "kelas": "XI IPS 1",
      "ruang": "H1.04"
    },
    {
      "id": "seed208",
      "hari": 2,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Matematika",
      "kelas": "XI IPA 3",
      "ruang": "AHC 5"
    },
    {
      "id": "seed209",
      "hari": 2,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Matematika",
      "kelas": "XI IPA 4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed210",
      "hari": 2,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Matematika",
      "kelas": "XI IPS 2",
      "ruang": "AHC 5"
    },
    {
      "id": "seed229",
      "hari": 2,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Matematika",
      "kelas": "XI IPA 3",
      "ruang": "AHC 5"
    },
    {
      "id": "seed230",
      "hari": 2,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Matematika",
      "kelas": "XI IPA 4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed231",
      "hari": 2,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Matematika",
      "kelas": "XI IPS 2",
      "ruang": "AHC 5"
    },
    {
      "id": "seed247",
      "hari": 2,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Matematika",
      "kelas": "XI IPA 1",
      "ruang": "D1"
    },
    {
      "id": "seed248",
      "hari": 2,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Matematika",
      "kelas": "XI IPA 2",
      "ruang": "D1"
    },
    {
      "id": "seed249",
      "hari": 2,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Matematika",
      "kelas": "XI IPS 1",
      "ruang": "D1"
    },
    {
      "id": "seed268",
      "hari": 2,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Matematika",
      "kelas": "XI IPA 1",
      "ruang": "D1"
    },
    {
      "id": "seed269",
      "hari": 2,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Matematika",
      "kelas": "XI IPA 2",
      "ruang": "D1"
    },
    {
      "id": "seed270",
      "hari": 2,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Matematika",
      "kelas": "XI IPS 1",
      "ruang": "D1"
    }
  ],
  "g9": [
    {
      "id": "seed183",
      "hari": 1,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Al-Fatihah",
      "kelas": "X-1",
      "ruang": "D1"
    },
    {
      "id": "seed184",
      "hari": 1,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Al-Fatihah",
      "kelas": "X-2",
      "ruang": "D1"
    },
    {
      "id": "seed185",
      "hari": 1,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "Al-Fatihah",
      "kelas": "X-3",
      "ruang": "D1"
    },
    {
      "id": "seed246",
      "hari": 2,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "TIK",
      "kelas": "X-8",
      "ruang": "SU3.05"
    },
    {
      "id": "seed267",
      "hari": 2,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "TIK",
      "kelas": "X-8",
      "ruang": "SU3.05"
    },
    {
      "id": "seed285",
      "hari": 2,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "TIK",
      "kelas": "X-5",
      "ruang": "SU3.02"
    },
    {
      "id": "seed439",
      "hari": 5,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "TIK",
      "kelas": "X-5",
      "ruang": "SU3.02"
    }
  ],
  "g37": [
    {
      "id": "seed200",
      "hari": 2,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "TIK",
      "kelas": "X-4",
      "ruang": "SU3.01"
    },
    {
      "id": "seed221",
      "hari": 2,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "TIK",
      "kelas": "X-4",
      "ruang": "SU3.01"
    },
    {
      "id": "seed241",
      "hari": 2,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "TIK",
      "kelas": "X-3",
      "ruang": "H1.06"
    },
    {
      "id": "seed262",
      "hari": 2,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "TIK",
      "kelas": "X-3",
      "ruang": "H1.06"
    },
    {
      "id": "seed282",
      "hari": 2,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "TIK",
      "kelas": "X-2",
      "ruang": "H1.05"
    },
    {
      "id": "seed295",
      "hari": 3,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "TIK",
      "kelas": "X-1",
      "ruang": "H1.04"
    },
    {
      "id": "seed316",
      "hari": 3,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "TIK",
      "kelas": "X-1",
      "ruang": "H1.04"
    },
    {
      "id": "seed338",
      "hari": 3,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "TIK",
      "kelas": "X-2",
      "ruang": "H1.05"
    },
    {
      "id": "seed359",
      "hari": 3,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "TIK",
      "kelas": "X-2",
      "ruang": "H1.05"
    },
    {
      "id": "seed381",
      "hari": 3,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "TIK",
      "kelas": "X-3",
      "ruang": "H1.06"
    },
    {
      "id": "seed399",
      "hari": 4,
      "mulai": "09:20",
      "selesai": "10:10",
      "mapel": "TIK",
      "kelas": "X-7",
      "ruang": "SU3.04"
    },
    {
      "id": "seed420",
      "hari": 4,
      "mulai": "10:10",
      "selesai": "11:00",
      "mapel": "TIK",
      "kelas": "X-7",
      "ruang": "SU3.04"
    }
  ],
  "g42": [
    {
      "id": "seed204",
      "hari": 2,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "IPA",
      "kelas": "X-8",
      "ruang": "SU3.05"
    },
    {
      "id": "seed225",
      "hari": 2,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "IPA",
      "kelas": "X-8",
      "ruang": "SU3.05"
    },
    {
      "id": "seed245",
      "hari": 2,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "IPA",
      "kelas": "X-7",
      "ruang": "SU3.04"
    },
    {
      "id": "seed266",
      "hari": 2,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "IPA",
      "kelas": "X-7",
      "ruang": "SU3.04"
    },
    {
      "id": "seed281",
      "hari": 2,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "IPA",
      "kelas": "X-1",
      "ruang": "H1.04"
    },
    {
      "id": "seed339",
      "hari": 3,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "IPA",
      "kelas": "X-3",
      "ruang": "H1.06"
    },
    {
      "id": "seed360",
      "hari": 3,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "IPA",
      "kelas": "X-3",
      "ruang": "H1.06"
    },
    {
      "id": "seed384",
      "hari": 3,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "IPA",
      "kelas": "X-6",
      "ruang": "SU3.03"
    },
    {
      "id": "seed394",
      "hari": 4,
      "mulai": "09:20",
      "selesai": "10:10",
      "mapel": "IPA",
      "kelas": "X-2",
      "ruang": "H1.03"
    },
    {
      "id": "seed415",
      "hari": 4,
      "mulai": "10:10",
      "selesai": "11:00",
      "mapel": "IPA",
      "kelas": "X-2",
      "ruang": "H1.03"
    },
    {
      "id": "seed435",
      "hari": 5,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "IPA",
      "kelas": "X-1",
      "ruang": "H1.02"
    }
  ],
  "g26": [
    {
      "id": "seed205",
      "hari": 2,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Bahasa Inggris",
      "kelas": "XI IPA 1",
      "ruang": "D1"
    },
    {
      "id": "seed206",
      "hari": 2,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Bahasa Inggris",
      "kelas": "XI IPA 2",
      "ruang": "D1"
    },
    {
      "id": "seed207",
      "hari": 2,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Bahasa Inggris",
      "kelas": "XI IPS 1",
      "ruang": "D1"
    },
    {
      "id": "seed226",
      "hari": 2,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Bahasa Inggris",
      "kelas": "XI IPA 1",
      "ruang": "D1"
    },
    {
      "id": "seed227",
      "hari": 2,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Bahasa Inggris",
      "kelas": "XI IPA 2",
      "ruang": "D1"
    },
    {
      "id": "seed228",
      "hari": 2,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Bahasa Inggris",
      "kelas": "XI IPS 1",
      "ruang": "D1"
    },
    {
      "id": "seed250",
      "hari": 2,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Inggris",
      "kelas": "XI IPA 3",
      "ruang": "AHC 5"
    },
    {
      "id": "seed251",
      "hari": 2,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Inggris",
      "kelas": "XI IPA 4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed252",
      "hari": 2,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Bahasa Inggris",
      "kelas": "XI IPS 2",
      "ruang": "AHC 5"
    },
    {
      "id": "seed271",
      "hari": 2,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Inggris",
      "kelas": "XI IPA 3",
      "ruang": "AHC 5"
    },
    {
      "id": "seed272",
      "hari": 2,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Inggris",
      "kelas": "XI IPA 4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed273",
      "hari": 2,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Bahasa Inggris",
      "kelas": "XI IPS 2",
      "ruang": "AHC 5"
    }
  ],
  "g45": [
    {
      "id": "seed242",
      "hari": 2,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "IPS",
      "kelas": "X-4",
      "ruang": "SU3.01"
    },
    {
      "id": "seed263",
      "hari": 2,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "IPS",
      "kelas": "X-4",
      "ruang": "SU3.01"
    },
    {
      "id": "seed302",
      "hari": 3,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "IPS",
      "kelas": "X-8",
      "ruang": "SU3.05"
    },
    {
      "id": "seed323",
      "hari": 3,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "IPS",
      "kelas": "X-8",
      "ruang": "SU3.05"
    }
  ],
  "g10": [
    {
      "id": "seed284",
      "hari": 2,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "TIK",
      "kelas": "X-4",
      "ruang": "SU3.01"
    },
    {
      "id": "seed300",
      "hari": 3,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "TIK",
      "kelas": "X-6",
      "ruang": "SU3.03"
    },
    {
      "id": "seed321",
      "hari": 3,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "TIK",
      "kelas": "X-6",
      "ruang": "SU3.03"
    },
    {
      "id": "seed379",
      "hari": 3,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "TIK",
      "kelas": "X-1",
      "ruang": "H1.04"
    },
    {
      "id": "seed440",
      "hari": 5,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "TIK",
      "kelas": "X-6",
      "ruang": "SU3.03"
    }
  ],
  "g23": [
    {
      "id": "seed286",
      "hari": 2,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "IPA",
      "kelas": "X-6",
      "ruang": "SU3.03"
    },
    {
      "id": "seed341",
      "hari": 3,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "IPA",
      "kelas": "X-5",
      "ruang": "SU3.02"
    },
    {
      "id": "seed362",
      "hari": 3,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "IPA",
      "kelas": "X-5",
      "ruang": "SU3.02"
    },
    {
      "id": "seed382",
      "hari": 3,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "IPA",
      "kelas": "X-4",
      "ruang": "SU3.01"
    },
    {
      "id": "seed438",
      "hari": 5,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "IPA",
      "kelas": "X-4",
      "ruang": "SU3.01"
    }
  ],
  "g5": [
    {
      "id": "seed287",
      "hari": 2,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "TIK",
      "kelas": "X-7",
      "ruang": "SU3.04"
    },
    {
      "id": "seed442",
      "hari": 5,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "TIK",
      "kelas": "X-8",
      "ruang": "SU3.05"
    }
  ],
  "g25": [
    {
      "id": "seed299",
      "hari": 3,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Matematika",
      "kelas": "X-5",
      "ruang": "SU3.02"
    },
    {
      "id": "seed320",
      "hari": 3,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Matematika",
      "kelas": "X-5",
      "ruang": "SU3.02"
    },
    {
      "id": "seed344",
      "hari": 3,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Matematika",
      "kelas": "X-8",
      "ruang": "SU3.05"
    },
    {
      "id": "seed365",
      "hari": 3,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Matematika",
      "kelas": "X-8",
      "ruang": "SU3.05"
    }
  ],
  "g39": [
    {
      "id": "seed306",
      "hari": 3,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Sejarah Indonesia",
      "kelas": "XI IPA 3",
      "ruang": "AHC 5"
    },
    {
      "id": "seed307",
      "hari": 3,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Sejarah Indonesia",
      "kelas": "XI IPA 4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed308",
      "hari": 3,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Sejarah Indonesia",
      "kelas": "XI IPS 2",
      "ruang": "AHC 5"
    },
    {
      "id": "seed327",
      "hari": 3,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Sejarah Indonesia",
      "kelas": "XI IPA 3",
      "ruang": "AHC 5"
    },
    {
      "id": "seed328",
      "hari": 3,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Sejarah Indonesia",
      "kelas": "XI IPA 4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed329",
      "hari": 3,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Sejarah Indonesia",
      "kelas": "XI IPS 2",
      "ruang": "AHC 5"
    },
    {
      "id": "seed345",
      "hari": 3,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Sejarah Indonesia",
      "kelas": "XI IPA 1",
      "ruang": "D1"
    },
    {
      "id": "seed346",
      "hari": 3,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Sejarah Indonesia",
      "kelas": "XI IPA 2",
      "ruang": "D1"
    },
    {
      "id": "seed347",
      "hari": 3,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Sejarah Indonesia",
      "kelas": "XI IPS 1",
      "ruang": "D1"
    },
    {
      "id": "seed366",
      "hari": 3,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Sejarah Indonesia",
      "kelas": "XI IPA 1",
      "ruang": "D1"
    },
    {
      "id": "seed367",
      "hari": 3,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Sejarah Indonesia",
      "kelas": "XI IPA 2",
      "ruang": "D1"
    },
    {
      "id": "seed368",
      "hari": 3,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Sejarah Indonesia",
      "kelas": "XI IPS 1",
      "ruang": "D1"
    }
  ],
  "g11": [
    {
      "id": "seed309",
      "hari": 3,
      "mulai": "08:00",
      "selesai": "08:50",
      "mapel": "Matematika",
      "kelas": "XII IPA 1",
      "ruang": "H1.05"
    },
    {
      "id": "seed330",
      "hari": 3,
      "mulai": "08:50",
      "selesai": "09:40",
      "mapel": "Matematika",
      "kelas": "XII IPA 1",
      "ruang": "H1.05"
    },
    {
      "id": "seed352",
      "hari": 3,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Matematika",
      "kelas": "XII IPS 1",
      "ruang": "H1.06"
    },
    {
      "id": "seed373",
      "hari": 3,
      "mulai": "10:50",
      "selesai": "11:40",
      "mapel": "Matematika",
      "kelas": "XII IPS 1",
      "ruang": "H1.06"
    },
    {
      "id": "seed410",
      "hari": 4,
      "mulai": "09:20",
      "selesai": "10:10",
      "mapel": "Matematika",
      "kelas": "XII IPA 3",
      "ruang": "AHC 5"
    },
    {
      "id": "seed411",
      "hari": 4,
      "mulai": "09:20",
      "selesai": "10:10",
      "mapel": "Matematika",
      "kelas": "XII IPA 4",
      "ruang": "AHC 5"
    },
    {
      "id": "seed412",
      "hari": 4,
      "mulai": "09:20",
      "selesai": "10:10",
      "mapel": "Matematika",
      "kelas": "XII IPS 2",
      "ruang": "AHC 5"
    },
    {
      "id": "seed413",
      "hari": 4,
      "mulai": "09:20",
      "selesai": "10:10",
      "mapel": "Matematika",
      "kelas": "XII IPS 3",
      "ruang": "AHC 5"
    },
    {
      "id": "seed449",
      "hari": 5,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Matematika",
      "kelas": "XII IPA 1",
      "ruang": "D1"
    },
    {
      "id": "seed450",
      "hari": 5,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Matematika",
      "kelas": "XII IPS 1",
      "ruang": "D1"
    },
    {
      "id": "seed451",
      "hari": 5,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Matematika",
      "kelas": "XII IPA 2",
      "ruang": "D1"
    }
  ],
  "g41": [
    {
      "id": "seed385",
      "hari": 3,
      "mulai": "12:45",
      "selesai": "13:35",
      "mapel": "IPS",
      "kelas": "X-7",
      "ruang": "SU3.04"
    },
    {
      "id": "seed441",
      "hari": 5,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "IPS",
      "kelas": "X-7",
      "ruang": "SU3.04"
    }
  ],
  "g33": [
    {
      "id": "seed401",
      "hari": 4,
      "mulai": "09:20",
      "selesai": "10:10",
      "mapel": "Fisika",
      "kelas": "XI IPA 1",
      "ruang": "H1.05"
    },
    {
      "id": "seed422",
      "hari": 4,
      "mulai": "10:10",
      "selesai": "11:00",
      "mapel": "Fisika",
      "kelas": "XI IPA 1",
      "ruang": "H1.05"
    },
    {
      "id": "seed444",
      "hari": 5,
      "mulai": "10:00",
      "selesai": "10:50",
      "mapel": "Fisika",
      "kelas": "XI IPA 2",
      "ruang": "H1.06"
    }
  ]
};
