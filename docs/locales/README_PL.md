# 🛡️ Tarcza AISAFE™ v7.0 Beta — Suwerenna Ochrona Kognitywna i Runtime Sentinel dla AI

[![Licencja](https://img.shields.io/badge/Licencja-W%C5%82asno%C5%9Bciowa%20%2F%20Komercyjna-blue.svg)](LICENSE.md)
[![Wydanie](https://img.shields.io/badge/Wydanie-Tier%201%3A%207--Dniowy%20Free%20Trial-brightgreen.svg)](https://shield.aisafeinstitute.org/pricing)
[![Prywatność](https://img.shields.io/badge/Prywatno%C5%9B%C4%87-100%25%20Offline%20%C2%B7%20Zero--Cloud-purple.svg)]()
[![Zgodność](https://img.shields.io/badge/Zgodno%C5%9B%C4%87-EU%20AI%20Act%20%C2%B7%20ISO%2042001-blueviolet.svg)]()
[![Platformy](https://img.shields.io/badge/Platformy-Windows%20%7C%20Przegl%C4%85darki%20Web-informational.svg)]()

**Copyright © 2026 Brain in a Hat Limited · Ekosystem EdgeMind & theAIlaws.com · Wszelkie Prawa Zastrzeżone.**  
*Coventry, Wielka Brytania · Główny Architekt: Michał J Florek*

---

## 🌟 Przegląd Wykonawczy

**Tarcza AISAFE™ v7.0 Beta** to czołowy suwerenny strażnik runtime dla generatywnej sztucznej inteligencji oraz autonomicznych środowisk wieloagentowych. Zaprojektowana dla profesjonalistów, programistów i przedsiębiorstw wymagających bezwzględnego bezpieczeństwa, Tarcza AISAFE neutralizuje zagrożenia kognitywne, wektory wycieku danych oraz niekontrolowane pętle agentów w czasie rzeczywistym.

Działając w **100% lokalnie w trybie offline**, z **zerową telemetrią chmurową**, **sub-milisekundowym czasem reakcji (< 0,05 ms)** oraz **zużyciem 0,0 MB VRAM GPU**, Tarcza stanowi niewzruszoną śluzę bezpieczeństwa pomiędzy stacją roboczą, przeglądarką a chmurowymi lub lokalnymi platformami AI.

> [!NOTE]
> **Wydanie GitHub (Tier 1: 7-Dniowy Bezpłatny Okres Próbny):**  
> Niniejszy pakiet GitHub jest fabrycznie skonfigurowany w trybie 7-dniowej ewaluacji. Aby odblokować bezterminową licencję, zaawansowane zarządzanie agentami lub wdrożenie korporacyjne, przejdź do:  
> **[Pricing & Licences — AISAFE Shield v7.0](https://shield.aisafeinstitute.org/pricing)**.

---

## ⚡ Kluczowe Możliwości Ochronne i Funkcje Runtime

W przeciwieństwie do tradycyjnych zapor sieciowych i systemów antywirusowych ślepych na semantykę promptów i pętle autonomiczne, Tarcza AISAFE zapewnia pełną ochronę kognitywną:

### 1. Integralność Kognitywna i Ochrona Przed Iniekcją
* **Bieżąca Neutralizacja Prompt Injection i Jailbreaków:** Rygorystyczna inspekcja semantyczna blokująca bezpośrednie i pośrednie iniekcje poleceń, manipulacje behawioralne oraz ukryte wektory ataków.
* **Przechwytywanie Komend Destrukcyjnych:** Blokada komend niszczących system, złośliwych skryptów powłoki oraz nieautoryzowanych wywołań terminala.
* **Monitor Spójności Sesji i Zjawiska Dryfu:** Bieżąca kontrola wieloturowego dialogu zapobiegająca degradacji tożsamości modelu i manipulacji regułami bezpieczeństwa.
* **Normalizacja Homoglifów i Znaków Unicode:** Eliminacja znaków o zerowej szerokości oraz podstępnych znaków wielojęzycznych mających na celu ominięcie filtrów.
* **Strażnik Nagłówków Modeli Lokalnych:** Weryfikacja plików wag modeli (GGUF, SafeTensors) przed ich załadowaniem, eliminująca ataki typu Arbitrary Code Execution.

### 2. Ochrona Prywatności Danych i Zero-Wycieków
* **Data Cloak i Anonimizacja Danych Wrażliwych:** Automatyczne maskowanie w pamięci RAM danych osobowych (PII, PESEL, NIP), haseł, tokenów API oraz danych kart płatniczych przed wysłaniem.
* **Aktywny Strażnik Schowka:** Ciągła ochrona bufora schowka systemowego przed nieautoryzowanym odczytem przez procesy AI.
* **Przedwysyłkowy Filtr Plików:** Czyszczenie załączników (.csv, .json, .xlsx) z poufnych informacji biznesowych przed ich przetworzeniem przez model.
* **Kontrola Uprawnień Shadow AI OAuth:** Blokada nadmiarowych uprawnień chmurowych i nieautoryzowanych tokenów dostępu.
* **Izolacja DOM i Ramki Przeglądarki:** Pełna separacja kontekstu zapobiegająca kradzieży danych pomiędzy kartami i oknami.

### 3. Zarządzanie Agentami, Narzędziami i Wydatkami
* **Tłumik Prędkości i Finansowy Limit Bezpieczeństwa:** Ścisłe limity wywołań narzędzi oraz limit finansowy zapobiegający niekontrolowanemu drenażowi budżetu chmurowego (Denial of Wallet wg OWASP LLM10).
* **Bramka Jednorazowych Biletów Uprawnień (NanoTicket Gate):** Kryptograficzne tokeny HMAC-SHA256 autoryzujące pojedyncze wykonanie narzędzia, uniemożliwiające ataki powtórzeniowe.
* **Weryfikacja Woli Człowieka (Proof-of-Human-Volition):** Wymóg jednoznacznej autoryzacji przez operatora dla operacji o podwyższonym ryzyku.
* **Przypinanie Sum Kontrolnych Schematów MCP:** Blokada podmiany definicji narzędzi w trakcie trwania aktywnej sesji.
* **Autoryzacja Docelowych Portów i Połączeń:** Blokada ataków SSRF i nieautoryzowanego skanowania wewnętrznej infrastruktury chmurowej.

### 4. Monitorowanie w Czasie Rzeczywistym i Zabezpieczenia Awaryjne
* **Wbudowany Monitor Agentów AI:** Równoległe śledzenie, kategoryzacja i nadzór do 50 wątków AI oraz aplikacji desktopowych.
* **Autonomiczny Wyłącznik Bezpieczeństwa (Circuit Breaker):** Natychmiastowe zamrożenie sesji i izolacja procesu w przypadku wykrycia krytycznego naruszenia.
* **Pulsacyjne Ostrzeżenie Wizualne i Dźwiękowe:** Sygnał dźwiękowy oraz pulsowanie Tarczy na czerwono (10 sekund Alarm / 5 sekund Normalny) w razie nagłego spadku ochrony, trwające do przywrócenia pełnej zgodności.
* **Panel Informacyjny Stanu i Zagrożenia (Hover):** Wyświetlenie szczegółowego stanu bezpieczeństwa i poziomu zagrożenia po przytrzymaniu kursora nad Tarczą przez 1+ sekundę.
* **Certyfikacja HAC (Holistic Assurance Certificate):** Błyskawiczny eksport certyfikatów i raportów zgodności z EU AI Act oraz ISO 42001 (HTML i wektorowy PDF).

> [!WARNING]
> **Uwaga Bezpieczeństwa:** Platformy na poziomie AISAFE 1 i AISAFE 2 posiadają ograniczony poziom bezpieczeństwa. Zachowaj ostrożność podczas wprowadzania wrażliwych danych.

---

## 💎 Porównanie Wersji i Ścieżka Aktualizacji

| Funkcjonalność | Tier 1: Społecznościowa (GitHub) | Tier 2: Pro SOHO | Tier 3: AI Fortress | Tier 4: Enterprise Sovereign |
| :--- | :---: | :---: | :---: | :---: |
| **Czas Licencji** | 7 Dni Próbnych | Bezterminowa (Lifetime) | Bezterminowa / Roczna | Dedykowana Umowa SLA |
| **Skaner Platform AI** | Aktywny (Główne Portale) | Rozszerzony | Baza 1,000+ Systemów AI | Prywatne Endpointy Firmowe |
| **Monitor Agentów** | Podstawowy Nadzór | Zaawansowany Strażnik | Rygorystyczny Nadzór Agentów | Centralny Nadzór Floty |
| **Tłumik Wydatków** | Standardowa Prędkość | Limit $100 / godzinę | **Sztywny Limit $1,000 / h** | Dostosowany do ERP i Budżetu |
| **Bilety NanoTicket** | Podstawowa Kontrola | Standardowe Tokeny | **Bramka HMAC-SHA256** | Podpisywane Sprzętowo |
| **Ścisła Bramka Pre-Send**| Opcjonalna | Standardowa Inspekcja | **Synchroniczna Bramka Enklawy**| Wymuszona Polityką Firmy |
| **Raport Certyfikacji** | Podstawowy HAC | Pełny Certyfikat HAC | Certyfikat z Dekompozycją | Raport Audytowy Sovereign |
| **Dostęp do Licencji** | Zawarty w Wydaniu | **[Kup Wersję Pro](https://shield.aisafeinstitute.org/pricing)** | **[Kup AI Fortress](https://shield.aisafeinstitute.org/pricing)** | **[Kontakt Enterprise](https://shield.aisafeinstitute.org/pricing)** |

### Jak Przejść na Wyższy Poziom Tarczy:
Aby przejść z wersji próbnej na **Tier 2 (Pro SOHO)**, **Tier 3 (AI Fortress)** lub **Tier 4 (Enterprise Sovereign)**, odwiedź oficjalny portal:  
👉 **[Pricing & Licences — AISAFE Shield v7.0](https://shield.aisafeinstitute.org/pricing)**

Po uzyskaniu klucza licencyjnego wprowadź go bezpośrednio w panelu **Ustawienia → Aktywacja Licencji**, aby natychmiast odblokować wszystkie możliwości bez konieczności ponownej instalacji.

---

## 🚀 Szybki Start

1. Pobierz plik instalacyjny `AISAFE_Shield_v7.0_Beta_Windows_Setup.exe` lub archiwum ZIP z sekcji Releases.
2. Uruchom instalator i postępuj zgodnie z instrukcjami ekranowymi.
3. Zaakceptuj licencję EULA w wybranym języku przy pierwszym uruchomieniu.
4. Pływająca Tarcza pojawi się na pulpicie, gwarantując stałą ochronę w czasie rzeczywistym.
