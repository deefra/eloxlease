#!/usr/bin/env bash
# Downloads the assets used by the eloxlease.nl homepage clone.
set -euo pipefail

DEST="public/sites/eloxlease"
BASE="https://eloxlease.nl/wp-content/uploads"
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/130 Safari/537.36"

mkdir -p "$DEST"

fetch() {
  curl -sSfL -A "$UA" -o "$DEST/$2" "$BASE/$1"
  echo "$1 -> $DEST/$2"
}

fetch "2025/12/elox-lease-logo-black-2000-430x430.png" "logo.png"
fetch "2025/12/cropped-elox-lease-logo-black-2000-300x300.png" "logo-footer.png"
fetch "2025/12/cropped-elox-lease-logo-black-2000-192x192.png" "icon-192.png"
fetch "2025/12/cropped-elox-lease-logo-black-2000-180x180.png" "apple-touch-icon.png"
fetch "2025/12/cropped-elox-lease-logo-black-2000-32x32.png" "icon-32.png"
fetch "2021/10/repair-phone-call.svg" "repair-phone-call.svg"
fetch "2025/12/ecargo2zijkantgroep-scaled.jpg" "hero-ecargo-group.jpg"
fetch "2025/12/ecargobikemetbezorgerinstraat.jpg" "ecargobike-bezorger-straat.jpg"
fetch "2026/01/Silence-S02-B2B-Elektrische-bezorgmotorscooter-2-scaled.jpg" "silence-s02.jpg"
fetch "2026/01/ecargoschuinvoorproductfoto-scaled-1.png" "ecargobike-product.png"
fetch "2026/05/cooktek-pizzabag-charger-18-inch.png" "cooktek-pizzabag-charger.png"

# Product pages (the CookTek customer-logo PNGs return 404 on the source and are not downloaded)
fetch "2026/01/scooterrijden.png" "silence-s02-rijden.png"
fetch "2025/12/e-cargozijkantstraatbeeld-scaled.jpg" "ecargobike-zijkant-straat.jpg"
fetch "2025/12/ecargo1voorkant-scaled.jpg" "ecargobike-voorkant.jpg"
fetch "2025/12/ecargobikemetbezorger5.jpeg" "ecargobike-bezorger-5.jpg"
fetch "2026/05/cooktek-thermacube-charger.png" "cooktek-thermacube-charger.png"
fetch "2026/05/cooktek-thermacube-tas.png" "cooktek-thermacube-tas.png"

# Over ons gallery (thumbnails + full-size lightbox images)
fetch "2025/12/e-cargozijkantstraatbeeld-scaled-1-1000x800.jpg" "gallery-zijkant-straat-1000x800.jpg"
fetch "2025/12/ecargo3zijkantstraat-scaled-1-1000x800.jpg" "gallery-3-zijkant-straat-1000x800.jpg"
fetch "2025/12/ecargo2zijkantgroep-scaled-1-1000x800.jpg" "gallery-2-zijkant-groep-1000x800.jpg"
fetch "2025/12/e-cargozijkantstraatbeeld-scaled-1.jpg" "gallery-zijkant-straat.jpg"
fetch "2025/12/ecargo3zijkantstraat-scaled-1.jpg" "gallery-3-zijkant-straat.jpg"
fetch "2025/12/ecargo2zijkantgroep-scaled-1.jpg" "gallery-2-zijkant-groep.jpg"
