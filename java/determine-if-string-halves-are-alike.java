class Solution {
	final String vowel = "aeiouAEIOU";

	public boolean halvesAreAlike(String s) {
		String first = s.substring(0, s.length() / 2);
		String last = s.substring(s.length() / 2);

		int vowelsFirst = 0;
		int vowelsLast = 0;

		for (int i = 0; i < first.length(); i++) {
			char c = first.charAt(i);
			if (vowel.indexOf(c) > -1) {
				vowelsFirst++;
			}
		}

		for (int i = 0; i < last.length(); i++) {
			char c = last.charAt(i);
			if (vowel.indexOf(c) > -1) {
				vowelsLast++;
			}
		}

		return vowelsFirst == vowelsLast;
	}
}
