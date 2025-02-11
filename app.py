try:
    import streamlit as st
except ModuleNotFoundError:
    print("Streamlit is not installed. Please run this script in an environment where Streamlit is available.")
    exit()

from datetime import datetime
import matplotlib.pyplot as plt
from starplot import plot_zenith  # Assuming 'starplot' is the library used for zenith plots

# Helper function to convert figure to bytes
def fig_to_bytes(fig):
    from io import BytesIO
    buf = BytesIO()
    fig.savefig(buf, format="png", dpi=300, bbox_inches='tight')
    buf.seek(0)
    return buf

# Page configuration
st.set_page_config(page_title="Zenith Star Plot Generator", layout="centered")

st.title("\ud83c\udf0c Zenith Star Plot Generator")
st.write("Generate beautiful, high-resolution star plots for your specific location and date.")

# Inputs
st.sidebar.header("Customize Your Star Plot")

date = st.sidebar.date_input("Select Date", datetime.now())
latitude = st.sidebar.number_input("Latitude", value=37.0, format="%0.2f")
longitude = st.sidebar.number_input("Longitude", value=-112.0, format="%0.2f")

background_color = st.sidebar.color_picker("Background Color", "#000033")
star_color = st.sidebar.color_picker("Star Color", "#FFFFFF")
constellation_color = st.sidebar.color_picker("Constellation Line Color", "#ADD8E6")

# Function to generate the zenith star plot using Starplot library
def generate_star_plot(date, latitude, longitude, bg_color, star_color, const_color):
    fig, ax = plt.subplots(figsize=(8, 8), dpi=300)
    plot_zenith(
        date=date,
        latitude=latitude,
        longitude=longitude,
        background_color=bg_color,
        star_color=star_color,
        constellation_color=const_color,
        ax=ax
    )
    plt.tight_layout()
    return fig

# Generate plot
fig = generate_star_plot(date, latitude, longitude, background_color, star_color, constellation_color)
st.pyplot(fig)

# Download button
st.download_button(
    label="Download Star Plot as PNG",
    data=fig_to_bytes(fig),
    file_name=f"star_plot_{date}.png",
    mime="image/png"
)

st.write("\n\n*Developed by Stellar Vista Observatory*")
