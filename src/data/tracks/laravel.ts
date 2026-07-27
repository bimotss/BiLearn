import type { Track } from "@/lib/types";

export const laravelTrack: Track = {
  slug: "laravel",
  title: "PHP & Laravel",
  description:
    "Jalur tercepat ke pekerjaan backend lokal — dari PHP nol sampai API production.",
  hours: 100,
  recommendedPrereqs: ["html", "git", "sql"],
  color: "bg-rose-600",
  icon: "🐘",
  order: 8,
  modules: [
    {
      slug: "php-dasar",
      title: "PHP Dasar",
      description:
        "PHP dari nol — bahasa yang masih menggerakkan sebagian besar web Indonesia.",
      topics: [
        "Sintaks dasar: variabel, tipe, echo",
        "String & array (indexed, associative, multidimensional)",
        "Kondisi & loop, foreach untuk array",
        "Fungsi: parameter, return, arrow function",
        "Superglobal: $_GET, $_POST — cara kerja request",
        "Include/require & pemisahan file",
        "PHP 8 modern: match, null coalescing, named argument",
      ],
      items: [],
    },
    {
      slug: "php-oop",
      title: "PHP OOP & Composer",
      description:
        "Fondasi yang Laravel bangun di atasnya — wajib sebelum menyentuh framework.",
      topics: [
        "Class, property, method, constructor",
        "Visibility: public, private, protected",
        "Inheritance, abstract class, interface",
        "Trait — cara PHP berbagi perilaku",
        "Namespace & autoloading (PSR-4)",
        "Composer: install, require, vendor/",
        "Constructor property promotion & typed property",
      ],
      items: [],
    },
    {
      slug: "laravel-fundamental",
      title: "Laravel Fundamental",
      description:
        "Request masuk → route → controller → view keluar. Siklus yang harus otomatis di kepala.",
      topics: [
        "Instalasi, struktur folder, artisan",
        "Routing: get/post, parameter, named route",
        "Controller & resource controller",
        "Blade: layout, section, komponen, direktif",
        "Request & Response: input, redirect, session flash",
        "Konfigurasi & .env",
        "Middleware: konsep pipeline",
      ],
      items: [],
    },
    {
      slug: "eloquent",
      title: "Eloquent & Database",
      description:
        "ORM Laravel: model, relasi, dan migration — jantung setiap aplikasi Laravel.",
      topics: [
        "Migration: membuat & mengubah tabel lewat kode",
        "Model & konvensi penamaan",
        "CRUD: create, find, update, delete",
        "Query builder: where, orderBy, pagination",
        "Relasi: hasMany, belongsTo, belongsToMany",
        "Eager loading & masalah N+1",
        "Seeder & factory untuk data dummy",
      ],
      items: [],
    },
    {
      slug: "form-validasi",
      title: "Form & Validasi",
      description:
        "Menangani input user dengan aman — tempat sebagian besar bug keamanan lahir.",
      topics: [
        "Form Blade + CSRF token",
        "Validasi: rules, pesan custom, old input",
        "Form Request class untuk validasi kompleks",
        "File upload & storage",
        "Error handling & halaman error custom",
        "Mass assignment: fillable vs guarded",
      ],
      items: [],
    },
    {
      slug: "auth-otorisasi",
      title: "Auth & Otorisasi",
      description:
        "Login, register, dan 'siapa boleh apa' — requirement setiap aplikasi bisnis.",
      topics: [
        "Laravel Breeze: scaffolding auth",
        "Session, remember me, logout semua device",
        "Middleware auth & redirect",
        "Gate & Policy: otorisasi per-model",
        "Role sederhana tanpa package",
        "Password reset & email verification",
      ],
      items: [],
    },
    {
      slug: "api",
      title: "REST API dengan Laravel",
      description:
        "Laravel sebagai backend untuk frontend React/Next atau mobile.",
      topics: [
        "Route API & perbedaannya dengan web",
        "API Resource: membentuk JSON response",
        "Sanctum: token auth untuk SPA & mobile",
        "Status code & struktur error yang konsisten",
        "Pagination, filter, sort di API",
        "Rate limiting & CORS",
        "Dokumentasi API sederhana",
      ],
      items: [],
    },
    {
      slug: "fitur-produksi",
      title: "Fitur Produksi",
      description:
        "Yang membedakan aplikasi tutorial dan aplikasi yang dipakai orang.",
      topics: [
        "Queue & job: kirim email tanpa bikin user menunggu",
        "Task scheduling (cron)",
        "Cache: config, route, dan data",
        "Mail & notifikasi",
        "Event & listener",
        "Log & debugging production (telescope, pail)",
      ],
      items: [],
    },
    {
      slug: "testing-laravel",
      title: "Testing dengan Pest",
      description:
        "Feature test yang memberi rasa aman deploy hari Jumat.",
      topics: [
        "Pest: sintaks & struktur test",
        "Feature test: HTTP request & assert response",
        "Database test: RefreshDatabase & factory",
        "Menguji auth & otorisasi",
        "Mock service eksternal",
        "Test apa yang penting duluan (happy path + validasi)",
      ],
      items: [],
    },
  ],
};
