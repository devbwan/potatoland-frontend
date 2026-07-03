import { loginSchema, registerSchema } from "./schemas/auth.js";

const samplePost = {
  title: "Potatoland MVP",
  content: "<script>alert('xss')</script> 이 문자열은 HTML이 아니라 일반 텍스트로 렌더링됩니다."
};

export function App() {
  const registerFields = Object.keys(registerSchema.shape);
  const loginFields = Object.keys(loginSchema.shape);

  return (
    <main className="app">
      <section className="panel">
        <p className="eyebrow">Shared validation contract</p>
        <h1>Potatoland</h1>
        <p>
          인증 검증은 프론트엔드와 백엔드가 같은 Zod 스키마를 사용합니다.
          비밀번호는 복잡도 조건 없이 8자 이상 100자 이하만 검사합니다.
        </p>
        <div className="schema-grid" aria-label="인증 스키마 필드">
          <div>
            <h2>Register</h2>
            <ul>
              {registerFields.map((field) => (
                <li key={field}>{field}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Login</h2>
            <ul>
              {loginFields.map((field) => (
                <li key={field}>{field}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="panel">
        <p className="eyebrow">Plain text rendering</p>
        <h2>{samplePost.title}</h2>
        <p className="post-content">{samplePost.content}</p>
      </section>
    </main>
  );
}
