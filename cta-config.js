/* ============================================================
   CTA DESTINATION CONFIG — $500 Grocery Pre-lander → Reco Social
   ============================================================
   Flow: l'utente clicca "CLAIM MY $500" → risponde alle 3 domande
   → verifica idoneità → si apre il popup Reco Social (Step 1 Required)
   → clicca "Join Reco & Unlock" → passa dal tuo link ClickFlare:
   https://tk.freerewards.blog/cf/click/1

   QUESTO È L'UNICO FILE CHE DEVI MODIFICARE PER CAMBIARE IL LINK.
   Su GitHub:
     1. Apri cta-config.js
     2. Icona matita (✏ Edit)
     3. Cambia l'url tra le virgolette (es. nuovo campaign id)
     4. Commit → Netlify / Cloudflare Pages aggiorna il sito in ~1 min
   ============================================================ */

window.GROCERY_CTA = {
  // Reco Social offer via ClickFlare tracker
  url: "https://tk.freerewards.blog/cf/click/1",

  // "_blank" apre l'offerta in una nuova scheda (consigliato per i flussi affiliate)
  target: "_blank",

  // Attributi standard affiliate
  rel: "nofollow sponsored noopener"
};
