from pathlib import Path

from PIL import Image, ImageOps


PROJECT_ROOT = Path(__file__).resolve().parents[1]
IMAGE_ROOT = PROJECT_ROOT / "src" / "assets" / "img"
OUTPUT_ROOT = IMAGE_ROOT / "display"

DISPLAY_IMAGES = {
    "company.webp": ("mallas_Saru.jpg", 1200),
    "building.webp": ("trabajos/malla_Edificio/1.jpg", 960),
    "residential-one.webp": ("trabajos/malla_Residencial/1.jpg", 960),
    "residential-two.webp": ("trabajos/malla_Residencial/2.jpg", 960),
    "client-one.webp": ("trabajos/clientes_Satisfechos/1.jpg", 960),
    "client-two.webp": ("trabajos/clientes_Satisfechos/2.jpg", 960),
    "window.webp": ("trabajos/Ventanas/Ventanas/IMG-20260325-WA0051.jpg", 960),
    "convenio.webp": ("trabajos/convenios/tarjeta_Vecino_viveLaForida_Mallas_Saru_4.jpg", 960),
}


def create_display_images() -> None:
    """Create lightweight variants for images rendered inside page cards.

    The original gallery files remain untouched because the lightbox needs their
    additional resolution. These variants are only used at normal page size.
    """

    OUTPUT_ROOT.mkdir(parents=True, exist_ok=True)

    for output_name, (source_name, max_size) in DISPLAY_IMAGES.items():
        source_path = IMAGE_ROOT / source_name
        output_path = OUTPUT_ROOT / output_name

        with Image.open(source_path) as source:
            image = ImageOps.exif_transpose(source).convert("RGB")
            image.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
            image.save(output_path, "WEBP", quality=76, method=6)

        print(f"{source_name} -> display/{output_name} ({output_path.stat().st_size:,} bytes)")


if __name__ == "__main__":
    create_display_images()
