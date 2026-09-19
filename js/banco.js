/* ==========================================================
   CONEXÃO COM O BANCO DE DADOS (Supabase)
   Estes dados ficam guardados AQUI, uma vez só, e todas as
   páginas usam este arquivo: o portfólio, o login e o admin.

   A chave abaixo é a chave PÚBLICA (publishable). Ela pode ficar
   no site, porque quem protege os seus dados é a tranca do banco
   (RLS), criada pelo arquivo banco.sql.

   NUNCA coloque chave secreta (secret ou service_role) em
   nenhum arquivo do site.
   ========================================================== */
window.BANCO = {
  URL: 'https://nhxewsnwubytkhisfbqe.supabase.co',
  CHAVE: 'sb_publishable_KTLVfdSFvy-aZU1evTUm0A_x7GOa6Kn',
  EMAIL: 'lorena.sarnaglia@gmail.com',
  _cliente: null,

  /* Devolve o cliente do Supabase (usado no login e no admin).
     Só funciona se a biblioteca do Supabase (CDN) já foi carregada
     antes, com uma tag script. Devolve null se ela não carregou. */
  cliente: function () {
    if (!window.BANCO._cliente && window.supabase && window.supabase.createClient) {
      window.BANCO._cliente = window.supabase.createClient(window.BANCO.URL, window.BANCO.CHAVE, {
        auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
      });
    }
    return window.BANCO._cliente;
  }
};
