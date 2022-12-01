import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import AtomLink from "@/components/atom/AtomLink.vue";

describe("AtomLink", () => {
  it("renders properly", () => {
    const wrapper = mount(AtomLink, {
      props: { link: { id: 1, type: "test", text: "Hello Vitest", url: "sampleUrl" } },
    });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
