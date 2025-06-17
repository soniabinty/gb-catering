import React from 'react';
import { useTranslation } from 'react-i18next';
import decorImg from './../../../assets/decor.jpg'

const WeddingDecorPage = () => {
  const { t } = useTranslation();

  return (
    <main className="site-main max-w-7xl mx-auto">
      {/* Header */}
      <header className="px-4 py-6">
        <h1 className="md:text-6xl krona-font  text-4xl">{t("decor.title")}</h1>
      </header>

      {/* Content */}
      <div className="mx-auto px-4">
        <div className="mb-6">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={decorImg}
              alt={t("decor.imageAlt")}
              width="300"
              height="200"
            />
          </a>
        </div>

        {/* Comments Section */}
        <section className="comments-area mt-10">
          <h3 className="text-xl font-semibold mb-4">{t("decor.responses", { count: 0 })}</h3>

          {/* Comment Form */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">{t("decor.leaveReply")}</h2>
            <form
              action="https://eventsbyindianocean.co.uk/wp-comments-post.php"
              method="post"
              className="space-y-4"
            >
              <p className="text-sm">
                <span>{t("decor.privacy")}</span>{' '}
                <span className="text-red-600">{t("decor.requiredNote")}</span>
              </p>

              <div>
                <label htmlFor="comment" className="block font-medium">
                  {t("decor.comment")} <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  cols="45"
                  rows="6"
                  required
                  className="w-full border rounded p-2"
                ></textarea>
              </div>

              <div>
                <label htmlFor="author" className="block font-medium">
                  {t("decor.name")} <span className="text-red-600">*</span>
                </label>
                <input
                  id="author"
                  name="author"
                  type="text"
                  className="w-full border rounded p-2"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium">
                  {t("decor.email")} <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full border rounded p-2"
                  required
                />
              </div>

              <div>
                <label htmlFor="url" className="block font-medium">
                  {t("decor.website")}
                </label>
                <input
                  id="url"
                  name="url"
                  type="url"
                  className="w-full border rounded p-2"
                />
              </div>

              <div>
                <input
                  name="submit"
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 cursor-pointer"
                  value={t("decor.postComment")}
                />
                <input type="hidden" name="comment_post_ID" value="253" />
                <input type="hidden" name="comment_parent" value="0" />
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default WeddingDecorPage;
