function Member({ member }) {
  return (
    <article>
      <h2>
        {member.firstName} {member.lastName}
      </h2>
    </article>
  );
}
export { Member };
