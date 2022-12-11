const Main = () => {
  return (
    <div className="movie">
      <img src="/its ok.png" alt="movie-logo" height="150px" />
      <p className="sinopsis">
        Moon Gang-tae (Kim Soo-hyun), seorang pekerja kesehatan komunitas di
        bangsal psikiatri yang tidak punya waktu untuk cinta dan Ko Moon-young
        (Seo Yea-ji), seorang penulis buku anak-anak sukses yang menderita
        gangguan kepribadian antisosial dan tidak pernah mengenal cinta. Setelah
        bertemu, keduanya perlahan mulai menyembuhkan luka emosional satu sama
        lain. Di sepanjang serinya, hal lain juga mulai terungkap tentang
        kebenaran masa lalu mereka yang telah menghantui hidup mereka.
      </p>

      <div>
        <button className="btnmovie btnplay">Putar</button>
        <button className="btnmovie btninfo">Selengkapnya</button>
      </div>
    </div>
  );
};
export default Main;
