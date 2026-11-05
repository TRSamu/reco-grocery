# 🛒 $500 Grocery Reward → Reco Social (CPI + CPR) Landing Page

Landing page mobile-first ispirata al template ad alta conversione CashApp/Reco (con Hero Card `$500`, contatori live, toast iOS in tempo reale, sticky CTA e Bottom Sheet Modal `STEP 1 REQUIRED` che guida l'utente a **scaricare e registrarsi 18+ su Reco Social** per far scattare la conversione CPI + CPR).

## 📁 Struttura della cartella

| File | Descrizione |
|---|---|
| `index.html` | Landing page completa + Bottom Sheet Modal per lo sblocco con Reco Social |
| `cta-config.js` | **⭐ Configurazione link affiliato / tracker** (l'unico file da modificare per cambiare URL) |
| `assets/reco-icon.jpg` | Icona ufficiale Reco Social |
| `_headers` | Regole anti-cache per Netlify e Cloudflare Pages (così le modifiche a `cta-config.js` sono istantanee) |
| `netlify.toml` | Configurazione zero-build pronta per Netlify |

## 🔗 Come cambiare il link dell'offerta (`cta-config.js`)

Apri `cta-config.js` (anche direttamente da GitHub cliccando l'icona ✏ Edit) e modifica il campo `url`:

```javascript
window.GROCERY_CTA = {
  url: "https://tuo-link-tracker-o-taprkr.com/...",
  ...
};
```

Supporta anche parametri URL dinamici senza toccare il codice:
- `?cta=cf` → usa la variante definita in `variants.cf`
- `?cta=https://altro-link.com` → sovrascrive al volo la destinazione del pulsante Reco

## 🚀 Deploy su Netlify o Cloudflare Pages

1. Carica il contenuto di questa cartella in una repository GitHub.
2. **Su Cloudflare Pages** o **Netlify**:
   - **Framework preset**: `None`
   - **Build command**: *(lascia vuoto)*
   - **Build output / Publish directory**: `.` (oppure `reco-grocery-landing` se carichi l'intera cartella principale)
