using UnityEngine;

public class PlayerController : MonoBehaviour
{
    private float moveInput;
    private bool facingRight = true;
    public float speed = 5f;

    void Update()
    {
        moveInput = Input.GetAxis("Horizontal");

        // Movimento do personagem
        transform.Translate(Vector2.right * moveInput * speed * Time.deltaTime);

        // Verifica e vira o personagem se necessário
        if (moveInput > 0 && !facingRight)
        {
            Flip();
        }
        else if (moveInput < 0 && facingRight)
        {
            Flip();
        }
    }

    void Flip()
    {
        facingRight = !facingRight;
        Vector3 scale = transform.localScale;
        scale.x *= -1;
        transform.localScale = scale;
    }
}
