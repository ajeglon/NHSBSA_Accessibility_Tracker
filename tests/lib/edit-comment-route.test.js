const request = require('supertest');
const fs = require('fs');
const path = require('path');
const app = require('../../app');

describe('Edit comment route', () => {
  const commentsFile = path.join(__dirname, '../../comments.json');
  const slug = 'test-slug';
  const commentId = 'testid123';
  const testComment = {
    id: commentId,
    slug,
    text: 'This is a test comment',
    date: new Date().toISOString()
  };

  beforeAll(() => {
    // Write a test comment to comments.json
    fs.writeFileSync(commentsFile, JSON.stringify([testComment], null, 2));
  });

  afterAll(() => {
    // Clean up: remove the test comment
    fs.writeFileSync(commentsFile, JSON.stringify([], null, 2));
  });

  it('should render the edit comment page with the correct comment', async () => {
    const res = await request(app)
      .get(`/wcag-failures/${slug}/comment/${commentId}/edit`);

    expect(res.status).toBe(200);
    expect(res.text).toContain('Edit Comment');
    expect(res.text).toContain(testComment.text);
  });

  it('should redirect to the failure page if the comment does not exist', async () => {
    const res = await request(app)
      .get(`/wcag-failures/${slug}/comment/nonexistentid/edit`);

    expect(res.status).toBe(302);
    expect(res.headers.location).toBe(`/wcag-failures/${slug}`);
  });
});