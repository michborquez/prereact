export default function TeamCard({ nombre, rol, email, emoji }) {
  return (
    <article className="team-card">
      <div className="team-card__avatar" aria-hidden="true">
        {emoji}
      </div>
      <h5 className="team-card__name">{nombre}</h5>
      <p className="team-card__role">{rol}</p>
      <a className="team-card__mail" href={`mailto:${email}`}>
        {email}
      </a>
    </article>
  );
}
