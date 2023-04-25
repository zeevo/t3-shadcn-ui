import type { NextPage } from "next";
import type { PropsWithChildren, ReactNode } from "react";
import getConfig from "~/core/lib/config";
import { api } from "~/core/utils/api";
import Layout from "../components/Layout";
import AuthShowcase from "../core/components/AuthShowcase";
import Button from "../core/components/Button";
import Code from "../core/components/Code";
import ComponentPreview from "../core/components/ComponentPreview";
import Head from "../core/components/Head";
import Link from "../core/components/Link";
import type { Config } from "../core/lib/config";

const NextAuthShowCase = () => {
  return <AuthShowcase />;
};

interface ActiveProps {
  setActive: (active: boolean) => void;
  active: boolean;
}

const TypographyShowcase = () => {
  return (
    <div className="prose w-full max-w-4xl flex-grow">
      <div className="my-20 max-w-3xl">
        <h1 id="heading-1">
          <a aria-hidden="true" tabIndex={-1} href="#heading-1">
            <span className="relative mr-1 -mt-1 inline-block align-middle text-base font-bold opacity-20 hover:opacity-60">
              #
            </span>
          </a>
          Heading 1
        </h1>
        <h2 id="heading-2">
          <a aria-hidden="true" tabIndex={-1} href="#heading-2">
            <span className="relative mr-1 -mt-1 inline-block align-middle text-base font-bold opacity-20 hover:opacity-60">
              #
            </span>
          </a>
          Heading 2
        </h2>
        <h3 id="heading-3">
          <a aria-hidden="true" tabIndex={-1} href="#heading-3">
            <span className="relative mr-1 -mt-1 inline-block align-middle text-base font-bold opacity-20 hover:opacity-60">
              #
            </span>
          </a>
          Heading 3
        </h3>
        <h4 id="heading-4">
          <a aria-hidden="true" tabIndex={-1} href="#heading-4">
            <span className="relative mr-1 -mt-1 inline-block align-middle text-base font-bold opacity-20 hover:opacity-60">
              #
            </span>
          </a>
          Heading 4
        </h4>
        <p>
          By default, Tailwind removes all of the default browser styling from
          paragraphs, headings, lists and more. This ends up being really useful
          for building application UIs because you spend less time undoing
          user-agent styles, but when you <em>really are</em> just trying to
          style some content that came from a rich-text editor in a CMS or a
          markdown file, it can be surprising and unintuitive.
        </p>
        <blockquote>
          <p>
            Why is Tailwind removing the default styles on my <code>h1</code>
            elements? How do I disable this? What do you mean I lose all the
            other base styles too?
          </p>
        </blockquote>
        <p>
          We hear you, but we’re not convinced that simply disabling our base
          styles is what you really want. You don’t want to have to remove
          annoying margins every time you use a <code>p</code> element in a
          piece of your dashboard UI. And I doubt you really want your blog
          posts to use the user-agent styles either — you want them to look
          <em>awesome</em>, not awful.
        </p>
        <p>
          The <code>@tailwindcss/typography</code> plugin is our attempt to give
          you what you <em>actually</em> want, without any of the downsides of
          doing something stupid like disabling our base styles.
        </p>
        <p>
          It adds a new <code>prose</code> class that you can slap on any block
          of vanilla HTML content and turn it into a beautiful, well-formatted
          document:
        </p>
        <pre className="language-html">
          <code className="language-html">
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>article
              </span>
              <span className="token attr-name">class</span>
              <span className="token attr-value">
                <span className="token punctuation attr-equals">=</span>
                <span className="token punctuation">"</span>prose
                <span className="token punctuation">"</span>
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>h1
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            Garlic bread with cheese: What the science tells us
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>h1
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>p
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf for Halloween.
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>p
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"  "}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;</span>p
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>p
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
            {"\n"}
            {"  "}
            <span className="token comment">&lt;!-- ... --&gt;</span>
            {"\n"}
            <span className="token tag">
              <span className="token tag">
                <span className="token punctuation">&lt;/</span>article
              </span>
              <span className="token punctuation">&gt;</span>
            </span>
          </code>
        </pre>
        <p>
          For more information about how to use the plugin and the features it
          includes,
          <a
            href="https://github.com/tailwindcss/typography/blob/master/README.md"
            rel="nofollow"
          >
            read the documentation
          </a>
          .
        </p>
        <hr />
        <h2 id="what-to-expect-from-here-on-out">
          <a
            aria-hidden="true"
            tabIndex={-1}
            href="#what-to-expect-from-here-on-out"
          >
            <span className="relative mr-1 -mt-1 inline-block align-middle text-base font-bold opacity-20 hover:opacity-60">
              #
            </span>
          </a>
          What to expect from here on out
        </h2>
        <p>
          What follows from here is just a bunch of absolute nonsense I’ve
          written to dogfood the plugin itself. It includes every sensible
          typographic element I could think of, like <strong>bold text</strong>,
          unordered lists, ordered lists, code blocks, block quotes,
          <em>and even italics</em>.
        </p>
        <p>It’s important to cover all of these use cases for a few reasons:</p>
        <ol>
          <li>We want everything to look good out of the box.</li>
          <li>
            Really just the first reason, that’s the whole point of the plugin.
          </li>
          <li>
            Here’s a third pretend reason though a list with three items looks
            more realistic than a list with two items.
          </li>
        </ol>
        <p>Now we’re going to try out another header style.</p>
        <h3 id="typography-should-be-easy">
          <a aria-hidden="true" tabIndex={-1} href="#typography-should-be-easy">
            <span className="relative mr-1 -mt-1 inline-block align-middle text-base font-bold opacity-20 hover:opacity-60">
              #
            </span>
          </a>
          Typography should be easy
        </h3>
        <pre className="language-js">
          <code className="language-js">
            module<span className="token punctuation">.</span>exports
            <span className="token operator">=</span>
            <span className="token punctuation">{"{"}</span>
            {"\n"}
            {"  "}
            <span className="token literal-property property">purge</span>
            <span className="token operator">:</span>
            <span className="token punctuation">[</span>
            <span className="token punctuation">]</span>
            <span className="token punctuation">,</span>
            {"\n"}
            {"  "}
            <span className="token literal-property property">theme</span>
            <span className="token operator">:</span>
            <span className="token punctuation">{"{"}</span>
            {"\n"}
            {"    "}
            <span className="token literal-property property">extend</span>
            <span className="token operator">:</span>
            <span className="token punctuation">{"{"}</span>
            <span className="token punctuation">{"}"}</span>
            <span className="token punctuation">,</span>
            {"\n"}
            {"  "}
            <span className="token punctuation">{"}"}</span>
            <span className="token punctuation">,</span>
            {"\n"}
            {"  "}
            <span className="token literal-property property">variants</span>
            <span className="token operator">:</span>
            <span className="token punctuation">{"{"}</span>
            <span className="token punctuation">{"}"}</span>
            <span className="token punctuation">,</span>
            {"\n"}
            {"  "}
            <span className="token literal-property property">plugins</span>
            <span className="token operator">:</span>
            <span className="token punctuation">[</span>
            <span className="token punctuation">]</span>
            <span className="token punctuation">,</span>
            {"\n"}
            <span className="token punctuation">{"}"}</span>
          </code>
        </pre>
        <p>Hopefully that looks good enough to you.</p>
        <h3 id="what-about-nested-lists">
          <a aria-hidden="true" tabIndex={-1} href="#what-about-nested-lists">
            <span className="relative mr-1 -mt-1 inline-block align-middle text-base font-bold opacity-20 hover:opacity-60">
              #
            </span>
          </a>
          What about nested lists?
        </h3>
        <p>
          Nested lists basically always look bad which is why editors like
          Medium don’t even let you do it, but I guess since some of you
          goofballs are going to do it we have to carry the burden of at least
          making it work.
        </p>
        <ol>
          <li>
            <strong>Nested lists are rarely a good idea.</strong>
            <ul>
              <li>
                You might feel like you are being really “organized” or
                something but you are just creating a gross shape on the screen
                that is hard to read.
              </li>
              <li>
                Nested navigation in UIs is a bad idea too, keep things as flat
                as possible.
              </li>
              <li>
                Nesting tons of folders in your source code is also not helpful.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Since we need to have more items, here’s another one.
            </strong>
            <ul>
              <li>
                I’m not sure if we’ll bother styling more than two levels deep.
              </li>
              <li>
                Two is already too much, three is guaranteed to be a bad idea.
              </li>
              <li>If you nest four levels deep you belong in prison.</li>
            </ul>
          </li>
          <li>
            <strong>
              Two items isn’t really a list, three is good though.
            </strong>
            <ul>
              <li>
                Again please don’t nest lists if you want people to actually
                read your content.
              </li>
              <li>Nobody wants to look at this.</li>
              <li>I’m upset that we even have to bother styling this.</li>
            </ul>
          </li>
        </ol>
        <p>
          The most annoying thing about lists in Markdown is that
          <code>&lt;li&gt;</code> elements aren’t given a child
          <code>&lt;p&gt;</code> tag unless there are multiple paragraphs in the
          list item. That means I have to worry about styling that annoying
          situation too.
        </p>
        <ul>
          <li>
            <p>
              <strong>For example, here’s another nested list.</strong>
            </p>
            <p>But this time with a second paragraph.</p>
            <ul>
              <li>
                These list items won’t have <code>&lt;p&gt;</code> tags
              </li>
              <li>Because they are only one line each</li>
            </ul>
          </li>
          <li>
            <p>
              <strong>
                But in this second top-level list item, they will.
              </strong>
            </p>
            <p>
              This is especially annoying because of the spacing on this
              paragraph.
            </p>
            <ul>
              <li>
                <p>
                  As you can see here, because I’ve added a second line, this
                  list item now has a <code>&lt;p&gt;</code> tag.
                </p>
                <p>This is the second line I’m talking about by the way.</p>
              </li>
              <li>
                <p>
                  Finally here’s another list item so it’s more like a list.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              A closing list item, but with no nested list, because why not?
            </p>
          </li>
        </ul>
        <p>And finally a sentence to close off this section.</p>
        <h2 id="there-are-other-elements-we-need-to-style">
          <a
            aria-hidden="true"
            tabIndex={-1}
            href="#there-are-other-elements-we-need-to-style"
          >
            <span className="relative mr-1 -mt-1 inline-block align-middle text-base font-bold opacity-20 hover:opacity-60">
              #
            </span>
          </a>
          There are other elements we need to style
        </h2>
        <p>
          I almost forgot to mention links, like
          <a href="https://tailwindcss.com" rel="nofollow">
            this link to the Tailwind CSS website
          </a>
          . We almost made them blue but that’s so yesterday, so we went with
          dark gray, feels edgier.
        </p>
        <p>We even included table styles, check it out:</p>
        <table>
          <thead>
            <tr>
              <th>Wrestler</th> <th>Origin</th> <th>Finisher</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bret “The Hitman” Hart</td> <td>Calgary, AB</td>
              <td>Sharpshooter</td>
            </tr>
            <tr>
              <td>Stone Cold Steve Austin</td> <td>Austin, TX</td>
              <td>Stone Cold Stunner</td>
            </tr>
            <tr>
              <td>Randy Savage</td> <td>Sarasota, FL</td> <td>Elbow Drop</td>
            </tr>
            <tr>
              <td>Vader</td> <td>Boulder, CO</td> <td>Vader Bomb</td>
            </tr>
            <tr>
              <td>Razor Ramon</td> <td>Chuluota, FL</td> <td>Razor’s Edge</td>
            </tr>
          </tbody>
        </table>
        <p>
          We also need to make sure inline code looks good, like if I wanted to
          talk about <code>&lt;span&gt;</code> elements or tell you the good
          news about <code>@tailwindcss/typography</code>.
        </p>
        <h3 id="sometimes-i-even-use-code-in-headings">
          <a
            aria-hidden="true"
            tabIndex={-1}
            href="#sometimes-i-even-use-code-in-headings"
          >
            <span className="relative mr-1 -mt-1 inline-block align-middle text-base font-bold opacity-20 hover:opacity-60">
              #
            </span>
          </a>
          Sometimes I even use <code>code</code> in headings
        </h3>
        <p>
          Even though it’s probably a bad idea, and historically I’ve had a hard
          time making it look good. This
          <em>“wrap the code blocks in backticks”</em> trick works pretty well
          though really.
        </p>
        <p>
          Another thing I’ve done in the past is put a <code>code</code> tag
          inside of a link, like if I wanted to tell you about the
          <a href="https://github.com/tailwindcss/docs" rel="nofollow">
            <code>tailwindcss/docs</code>
          </a>
          repository. I don’t love that there is an underline below the
          backticks but it is absolutely not worth the madness it would require
          to avoid it.
        </p>
        <h4 id="we-havent-used-an-h4-yet">
          <a aria-hidden="true" tabIndex={-1} href="#we-havent-used-an-h4-yet">
            <span className="relative mr-1 -mt-1 inline-block align-middle text-base font-bold opacity-20 hover:opacity-60">
              #
            </span>
          </a>
          We haven’t used an <code>h4</code> yet
        </h4>
        <p>
          But now we have. Please don’t use <code>h5</code> or <code>h6</code>
          in your content, Medium only supports two heading levels for a reason,
          you animals. I honestly considered using a <code>before</code>
          pseudo-element to scream at you if you use an <code>h5</code> or
          <code>h6</code>.
        </p>
        <p>
          We don’t style them at all out of the box because <code>h4</code>
          elements are already so small that they are the same size as the body
          copy. What are we supposed to do with an <code>h5</code>, make it
          <em>smaller</em> than the body copy? No thanks.
        </p>
        <h3 id="we-still-need-to-think-about-stacked-headings-though">
          <a
            aria-hidden="true"
            tabIndex={-1}
            href="#we-still-need-to-think-about-stacked-headings-though"
          >
            <span className="relative mr-1 -mt-1 inline-block align-middle text-base font-bold opacity-20 hover:opacity-60">
              #
            </span>
          </a>
          We still need to think about stacked headings though.
        </h3>
        <h4 id="lets-make-sure-we-dont-screw-that-up-with-h4-elements-either">
          <a
            aria-hidden="true"
            tabIndex={-1}
            href="#lets-make-sure-we-dont-screw-that-up-with-h4-elements-either"
          >
            <span className="relative mr-1 -mt-1 inline-block align-middle text-base font-bold opacity-20 hover:opacity-60">
              #
            </span>
          </a>
          Let’s make sure we don’t screw that up with <code>h4</code> elements,
          either.
        </h4>
        <p>
          Phew, with any luck we have styled the headings above this text and
          they look pretty good.
        </p>
        <p>
          Let’s add a closing paragraph here so things end with a decently sized
          block of text. I can’t explain why I want things to end that way but I
          have to assume it’s because I think things will look weird or
          unbalanced if there is a heading too close to the end of the document.
        </p>
        <p>
          What I’ve written here is probably long enough, but adding this final
          sentence can’t hurt.
        </p>
      </div>
      <div className="not-prose pb-10">
        <div className="my-10 mx-1 h-px bg-base-content/10" />
        <div className="flex justify-between">
          <div>
            <a
              href="/theme-generator"
              className="btn-ghost btn-sm btn gap-2 normal-case md:btn-md lg:gap-3"
            >
              <svg
                className="h-6 w-6 fill-current md:h-8 md:w-8"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
              </svg>
              <div className="flex flex-col items-start">
                <span className="hidden text-xs font-normal text-base-content/50 md:block">
                  Prev
                </span>
                <span>Theme Generator</span>
              </div>
            </a>
          </div>
          <div>
            <a
              href="/components/button"
              className="btn-sm btn gap-2 normal-case md:btn-md lg:gap-3"
            >
              <div className="flex flex-col items-end">
                <span className="hidden text-xs font-normal text-neutral-content/50 md:block">
                  Next
                </span>
                <span>Button</span>
              </div>
              <svg
                className="h-6 w-6 fill-current md:h-8 md:w-8"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="my-10 mx-1 h-px bg-base-content/10" />
        <div className="flex flex-col justify-between gap-2 px-4 text-xs md:flex-row">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <svg
                className="inline-block h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M12.0003283,16.9983464 C11.4478622,16.9983464 11,16.5506311 11,15.9983464 C11,15.4460616 11.4478622,14.9983464 12.0003283,14.9983464 C12.5527943,14.9983464 13.0006565,15.4460616 13.0006565,15.9983464 C13.0006565,16.5506311 12.5527943,16.9983464 12.0003283,16.9983464 Z M13,14 L11,14 C11,12.2983529 11.6245803,11.5696759 13.0527864,10.8555728 C13.8745803,10.4446759 14,10.2983529 14,9.5 C14,8.556407 13.2771608,8 12,8 C10.8954305,8 10,8.8954305 10,10 L8,10 C8,7.790861 9.790861,6 12,6 C14.2843464,6 16,7.32062807 16,9.5 C16,11.2016471 15.3754197,11.9303241 13.9472136,12.6444272 C13.1254197,13.0553241 13,13.2016471 13,14 Z"
                />
              </svg>
              <div>
                Do you have a question?
                <a
                  target="_blank"
                  rel="noopener"
                  className="link"
                  href="https://github.com/saadeghi/daisyui/discussions"
                >
                  ask the community
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="inline-block h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 1792 1792"
              >
                <path d="M1696 960q0 26-19 45t-45 19h-224q0 171-67 290l208 209q19 19 19 45t-19 45q-18 19-45 19t-45-19l-198-197q-5 5-15 13t-42 28.5-65 36.5-82 29-97 13v-896h-128v896q-51 0-101.5-13.5t-87-33-66-39-43.5-32.5l-15-14-183 207q-20 21-48 21-24 0-43-16-19-18-20.5-44.5t15.5-46.5l202-227q-58-114-58-274h-224q-26 0-45-19t-19-45 19-45 45-19h224v-294l-173-173q-19-19-19-45t19-45 45-19 45 19l173 173h844l173-173q19-19 45-19t45 19 19 45-19 45l-173 173v294h224q26 0 45 19t19 45zm-480-576h-640q0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5z" />
              </svg>
              <div>
                Do you see a bug?
                <a
                  target="_blank"
                  rel="noopener"
                  className="link"
                  href="https://github.com/saadeghi/daisyui/issues?q=Layout & Typography"
                >
                  open an issue on GitHub
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="inline-block h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
              <div>
                Do you like daisyUI?
                <a
                  target="_blank"
                  rel="noopener"
                  className="link"
                  href="https://twitter.com/intent/tweet?text=daisyUI%20%0D%0AComponents%20for%20Tailwind%20CSS%20%0D%0Ahttps://daisyui.com"
                >
                  tweet about it!
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="inline-block h-4 w-4 fill-rose-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 512 512"
              >
                <path d="M256,448a32,32,0,0,1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63,114.52,98.46,64,159.08,64c44.08,0,74.61,24.83,92.39,45.51a6,6,0,0,0,9.06,0C278.31,88.81,308.84,64,352.92,64,413.54,64,463.37,114.52,464,176.64c.54,54.21-18.63,104.26-58.61,153-18.77,22.87-52.8,59.45-131.39,112.8A32,32,0,0,1,256,448Z" />
              </svg>
              <div>
                Support daisyUI's development:
                <a
                  target="_blank"
                  rel="noopener"
                  className="link"
                  href="https://opencollective.com/daisyui"
                >
                  Open Collective
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <svg
                className="inline-block h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
              </svg>
              <div>
                <a
                  target="_blank"
                  rel="noopener"
                  className="link"
                  href="https://github.com/saadeghi/daisyui/blob/master/src/docs/src/routes/docs/layout-and-typography.svelte.md?plain=1"
                >
                  Edit this page on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="not-prose flex justify-center xl:hidden">
        <div className="flex flex-col gap-2 pb-6">
          <h3 className="text-xs font-bold text-base-content/50">Sponsors</h3>
          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href="https://www.stackbit.com/?utm_source=daisyui"
              target="_blank"
              rel="nofollow"
              className="flex w-[130px] flex-col items-center rounded border border-base-100 border-base-content/10 bg-base-100 hover:border-base-content/20"
            >
              <svg
                className="mt-2 mb-1 fill-base-content"
                width={110}
                height={20}
                viewBox="0 0 128 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M41.5717 8.50469C41.5717 6.29343 39.955 4.72344 37.3469 4.72344C35.234 4.72344 33.7217 5.68779 33.7217 7.27867C33.7217 11.6864 44.9893 8.11404 44.9893 15.8854C44.9893 19.615 41.7289 21.728 37.5558 21.728C34.0583 21.728 31.1468 20.1863 30.0535 17.3387L33.0178 14.3731C33.0178 17.007 34.7377 18.6728 37.5558 18.6728C39.767 18.6728 41.4157 17.6556 41.4157 16.0131C41.4157 11.5525 30.1481 15.1262 30.1481 7.50962C30.1481 3.9888 33.3826 1.66821 37.3469 1.66821C40.9095 1.66821 43.3935 3.37334 44.364 5.70744L41.5717 8.50469Z" />
                <path d="M50.2694 2.6106V7.7702H54.0777V10.6461H50.2694V16.6975C50.2694 18.2356 50.8173 18.6275 52.122 18.6275C52.7266 18.608 53.3286 18.5381 53.9217 18.4186V21.367C53.4524 21.5488 52.0962 21.6803 51.6527 21.6803C48.5483 21.6803 46.8788 20.3756 46.8788 17.1681V10.6461H44.4219V7.77512H46.8788V6.00365L50.2694 2.6106Z" />
                <path d="M124.192 2.6106V7.7702H128V10.6461H124.192V16.6975C124.192 18.2356 124.74 18.6275 126.044 18.6275C126.649 18.608 127.251 18.5381 127.844 18.4186V21.367C127.375 21.5488 126.018 21.6803 125.575 21.6803C122.471 21.6803 120.801 20.3756 120.801 17.1681V10.6461H118.344V7.77512H120.801V6.00365L124.192 2.6106Z" />
                <path d="M83.6286 11.1374L80.6287 12.8843C80.3167 11.345 78.9088 10.3807 77.2393 10.3807C75.0281 10.3807 73.4569 11.8929 73.4569 14.501C73.4569 17.1091 74.9961 18.6311 77.2393 18.6311C78.856 18.6311 80.2381 17.5611 80.6287 16.2049L83.55 17.9002C82.6373 20.0648 80.2638 21.7343 77.2393 21.7343C72.8831 21.7343 69.936 18.7859 69.936 14.5096C69.936 10.2591 72.9876 7.28493 77.2393 7.28493C80.238 7.27879 82.7417 8.94829 83.6286 11.1374Z" />
                <path d="M87.8767 2.16943V12.7589L92.9626 7.77744H97.5006L91.6579 13.437L97.6308 21.3337H93.4847L89.2845 15.7257L87.8767 17.077V21.3337H84.4861V2.16943H87.8767Z" />
                <path d="M101.688 2.16943V9.20861C102.731 8.03541 104.218 7.27867 106.201 7.27867C110.217 7.27867 113.033 10.4088 113.033 14.5562C113.033 18.6507 110.217 21.728 106.175 21.728C104.192 21.728 102.706 20.9713 101.663 19.7981V21.3337H98.2979V2.16943H101.688ZM105.523 18.6531C107.817 18.6531 109.513 17.0094 109.513 14.5586C109.513 12.055 107.817 10.3597 105.523 10.3597C103.358 10.3597 101.584 12.0022 101.584 14.5586C101.584 17.0598 103.364 18.6507 105.523 18.6507V18.6531Z" />
                <path d="M113.945 2.16943H117.466V5.56003H113.945V2.16943ZM117.385 7.77744V21.3337H113.994V7.77498L117.385 7.77744Z" />
                <path
                  d="M4.00607 0C3.47947 -6.18997e-07 2.95804 0.103822 2.4716 0.30553C1.98516 0.507237 1.54326 0.80287 1.17118 1.17552C0.799101 1.54817 0.504146 1.99052 0.303184 2.47727C0.102222 2.96401 -0.000802714 3.48561 4.70939e-06 4.01221V10.0207C-6.19753e-05 10.5153 0.137136 11.0001 0.396324 11.4213C0.655512 11.8426 1.02652 12.1836 1.46803 12.4064L6.68292 15.0243V6.67678H15.0243L21.6875 0H4.00607Z"
                  fill="#FF364E"
                />
                <path
                  d="M17.6949 21.7023C18.7572 21.7019 19.7758 21.2797 20.5268 20.5285C21.2778 19.7772 21.6997 18.7585 21.6997 17.6962V11.6865C21.6993 11.1914 21.5612 10.7062 21.3009 10.2852C21.0405 9.86408 20.6682 9.52369 20.2256 9.30201L15.0242 6.67676V15.0243H6.68283L0.0134277 21.7023H17.6949Z"
                  fill="#FF364E"
                />
                <path d="M69.0011 21.3336H68.377H65.7321L65.7837 19.6334C64.7383 20.8889 63.1953 21.7218 61.129 21.7218C57.075 21.7218 54.2495 18.6359 54.2495 14.5303C54.2495 10.3719 57.048 7.23315 61.102 7.23315C63.0675 7.23315 64.554 7.99113 65.5994 9.14221V7.73437H68.9998L69.0011 21.3336ZM61.7531 18.6371C63.9238 18.6371 65.7284 17.0401 65.7284 14.5315C65.7284 11.9677 63.9238 10.3203 61.7531 10.3203C59.4779 10.3203 57.7777 12.0205 57.7777 14.5315C57.7875 16.9934 59.4816 18.6408 61.7567 18.6408L61.7531 18.6371Z" />
              </svg>
              <p className="px-1.5 py-2 text-xs tracking-tighter text-base-content/50">
                Make your React site visually editable
              </p>
            </a>
          </div>
          <a
            href="https://opencollective.com/daisyui"
            target="_blank"
            rel="nofollow"
            className="group link-hover link text-xs opacity-80"
          >
            Become a sponsor
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              className="inline-block w-4 fill-current opacity-0 group-hover:opacity-50"
            >
              <path
                fillRule="evenodd"
                d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const Links = ({ setActive, active }: ActiveProps) => {
  return (
    <div className="flex items-center gap-2">
      <div>
        <Button
          variant="outlined"
          className="btn-xs"
          onClick={() => setActive(!active)}
          active={active}
        >
          <span className="p-2">active</span>
        </Button>
      </div>
    </div>
  );
};

const ColorsShowcase = () => (
  <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
    <div className="rounded bg-neutral text-center font-bold">Default</div>
    <div className="bg-primary text-center font-bold">Primary</div>
    <div className="bg-secondary text-center font-bold">Secondary</div>
    <div className="bg-accent text-center font-bold">Accent</div>
    <div className="bg-info text-center font-bold">Info</div>
    <div className="bg-success text-center font-bold ">Success</div>
    <div className="bg-warning text-center font-bold">Warning</div>
    <div className="bg-error text-center font-bold">Error</div>
  </div>
);

function TRPCShowcase() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div>
      {hello.data ? (
        <Code>{JSON.stringify(hello.data, null, 2)}</Code>
      ) : (
        "Loading tRPC query..."
      )}
    </div>
  );
}

const SideBarLink: React.FC<PropsWithChildren<{ href: string }>> = ({
  children,
  href,
}) => (
  <a className="flex gap-4" href={href}>
    {children}
  </a>
);

const Divider: React.FC<PropsWithChildren<{ id: string }>> = ({
  id,
  children,
}) => (
  <div className="divider divider-vertical mt-10" id={id}>
    <span className="text-2xl">{children}</span>
  </div>
);

const Home: NextPage<{ config: Config }> = ({ config }) => {
  return (
    <Layout config={config}>
      <Head
        title={config.site.title}
        defaultTitle={config.site.defaultTitle}
        description={config.site.description}
        canonical={config.site.url}
        image={config.site.image}
        site={config.site.url}
      />
      <Divider id="trpc">TRPC</Divider>
      <TRPCShowcase />
      <Divider id="auth">Next Auth</Divider>
      <NextAuthShowCase />
      <Divider id="colors">Colors</Divider>
      <ColorsShowcase />
      <Divider id="typography">Typography</Divider>
      <TypographyShowcase />
      <Divider id="daisyui">DaisyUI</Divider>
      <ComponentPreview />
    </Layout>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      config: getConfig(),
    },
  };
};

export default Home;
