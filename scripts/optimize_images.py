from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps


PROJECT_ROOT = Path(__file__).resolve().parents[1]
IMAGE_ROOT = PROJECT_ROOT / "src" / "assets" / "img"
PUBLIC_ROOT = PROJECT_ROOT / "public"
LOGO_PATH = IMAGE_ROOT / "logotipo_MallasSaru_Chile.jpg"
HERO_PATH = IMAGE_ROOT / "mallas_deSeguridad_Saru.jpg"


def convert_photos() -> None:
    for source_path in IMAGE_ROOT.rglob("*.jpg"):
        if source_path == LOGO_PATH:
            continue

        output_path = source_path.with_suffix(".webp")
        with Image.open(source_path) as source:
            image = ImageOps.exif_transpose(source).convert("RGB")
            image.thumbnail((1920, 1920), Image.Resampling.LANCZOS)
            image.save(output_path, "WEBP", quality=82, method=6)


def create_brand_assets() -> None:
    PUBLIC_ROOT.mkdir(parents=True, exist_ok=True)

    with Image.open(LOGO_PATH) as source:
        logo = ImageOps.exif_transpose(source).convert("RGB")

    favicon = ImageOps.contain(logo, (256, 256), Image.Resampling.LANCZOS)
    favicon.resize((32, 32), Image.Resampling.LANCZOS).save(
        PUBLIC_ROOT / "favicon-32.png", "PNG", optimize=True
    )
    favicon.resize((180, 180), Image.Resampling.LANCZOS).save(
        PUBLIC_ROOT / "apple-touch-icon.png", "PNG", optimize=True
    )
    favicon.save(
        PUBLIC_ROOT / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
    )

    with Image.open(HERO_PATH) as source:
        hero = ImageOps.exif_transpose(source).convert("RGB")
        card = ImageOps.fit(hero, (1200, 630), Image.Resampling.LANCZOS, centering=(0.55, 0.5)).convert("RGBA")

    overlay = Image.new("RGBA", card.size, (0, 0, 0, 0))
    overlay_draw = ImageDraw.Draw(overlay)
    for x in range(900):
        progress = x / 899
        alpha = int(226 * (1 - progress) ** 1.7)
        overlay_draw.line((x, 0, x, 630), fill=(18, 63, 55, alpha))
    overlay_draw.rectangle((0, 0, 1200, 630), fill=(17, 43, 37, 28))
    card = Image.alpha_composite(card, overlay)

    draw = ImageDraw.Draw(card)
    bold_font = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 70)
    brand_font = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 34)
    body_font = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 28)
    small_font = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 21)

    draw.rounded_rectangle((68, 54, 174, 160), radius=24, fill=(255, 253, 250, 246))
    logo_small = ImageOps.contain(logo, (92, 92), Image.Resampling.LANCZOS)
    card.paste(logo_small, (75, 61))

    draw.text((198, 66), "Mallas Saru", font=brand_font, fill=(255, 253, 250, 255))
    draw.text((198, 112), "Seguridad en altura", font=small_font, fill=(158, 224, 211, 255))
    draw.text((68, 226), "Tu seguridad,", font=bold_font, fill=(255, 253, 250, 255))
    draw.text((68, 306), "en nuestras manos.", font=bold_font, fill=(244, 177, 119, 255))
    draw.text(
        (72, 423),
        "Mallas de seguridad para balcones, ventanas y mascotas.",
        font=body_font,
        fill=(231, 242, 238, 255),
    )
    draw.rounded_rectangle((70, 518, 419, 567), radius=24, fill=(27, 146, 125, 244))
    draw.text((94, 529), "Evaluación e instalación profesional", font=small_font, fill=(255, 255, 255, 255))

    card.convert("RGB").save(PUBLIC_ROOT / "og-mallas-saru.jpg", "JPEG", quality=90, optimize=True)


if __name__ == "__main__":
    convert_photos()
    create_brand_assets()
